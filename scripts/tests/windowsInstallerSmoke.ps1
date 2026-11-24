param(
    [Parameter(Mandatory)][string] $Installer,
    [string] $VanillaArchive,
    [switch] $Packaged
)

$ErrorActionPreference = 'Stop'
$Installer = (Resolve-Path -LiteralPath $Installer).Path
$fixture = Join-Path ([IO.Path]::GetTempPath()) ("opencord-smoke-" + [guid]::NewGuid())
$discord = Join-Path $fixture 'DiscordCanary'
$first = Join-Path $discord 'app-1.0.1/resources'
$second = Join-Path $discord 'app-1.0.2/resources'
$devArchive = Join-Path $fixture 'revived-test.asar'

function Invoke-Installer([string] $Action) {
    & $Installer $Action -location $discord
    if ($LASTEXITCODE -ne 0) { throw "Installer $Action failed with exit code $LASTEXITCODE" }
}

function Assert-Patched([string] $Resources, [string] $ExpectedHash) {
    $original = Join-Path $Resources '_app.asar'
    $loader = Join-Path $Resources 'app.asar'
    if ((Get-FileHash -LiteralPath $original).Hash -ne $ExpectedHash) {
        throw 'Discord original archive changed during patching'
    }
    if ((Get-FileHash -LiteralPath $loader).Hash -eq $ExpectedHash) {
        throw 'Discord bootstrap archive was not installed'
    }
}

function Assert-Unpatched([string] $Resources, [string] $ExpectedHash) {
    if ((Test-Path -LiteralPath (Join-Path $Resources '_app.asar')) -or
        (Get-FileHash -LiteralPath (Join-Path $Resources 'app.asar')).Hash -ne $ExpectedHash) {
        throw 'Discord original archive was not restored by uninstall'
    }
}

if (Get-Process DiscordCanary -ErrorAction SilentlyContinue) {
    throw 'Close Discord Canary before testing the isolated installer fixture'
}

New-Item -ItemType Directory -Path $first, (Join-Path $fixture 'Profile/DiscordCanary') -Force | Out-Null
$env:DISCORD_USER_DATA_DIR = Join-Path $fixture 'Profile/DiscordCanary'
$env:OPENCORD_USER_DATA_DIR = Join-Path $fixture 'OpenCord'
if ($Packaged) {
    $env:OPENCORD_DEV_INSTALL = $null
    $env:OPENCORD_DIRECTORY = $null
} else {
    $env:OPENCORD_DEV_INSTALL = '1'
    $env:OPENCORD_DIRECTORY = $devArchive
    [IO.File]::WriteAllText($devArchive, 'dummy payload for loader smoke test')
}

$original = Join-Path $first 'app.asar'
if ($VanillaArchive) {
    Copy-Item -LiteralPath $VanillaArchive -Destination $original
} else {
    [IO.File]::WriteAllText($original, 'dummy Discord archive for loader smoke test')
}
$hash = (Get-FileHash -LiteralPath $original).Hash

Invoke-Installer '-install'
Assert-Patched $first $hash
if ($Packaged) {
    $payload = Join-Path $fixture 'OpenCord/opencord.asar'
    if (!(Test-Path -LiteralPath $payload)) { throw 'The packaged build was not downloaded' }
}

New-Item -ItemType Directory -Path $second -Force | Out-Null
Copy-Item -LiteralPath (Join-Path $first '_app.asar') -Destination (Join-Path $second 'app.asar')
Invoke-Installer '-repair'
Assert-Patched $second $hash
Invoke-Installer '-uninstall'
Assert-Unpatched $second $hash
Remove-Item -LiteralPath $second/app.asar
Invoke-Installer '-uninstall'
Assert-Unpatched $first $hash

Write-Output 'Passed Windows install, repair after a Discord version update, and uninstall.'
