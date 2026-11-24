<div align="center">

<img alt="OpenCord symbol" src="./assets/branding/opencord-symbol-dark.svg" width="96" height="96">

# OpenCord Revived

OpenCord Revived is a continuation of [MasuRii’s OpenCord](https://github.com/MasuRii/OpenCord), an open-source Discord desktop mod built on [Equicord](https://github.com/Equicord/Equicord) and [Vencord](https://github.com/Vendicated/Vencord). [Zaxoosh](https://github.com/Zaxoosh) develops and maintains this fork.

The first changes restore compatibility with Discord’s current module loader and fix crashes when opening settings. The repository has 1137 plugin source folders. The desktop settings page shows about 795 plugins after build filters.

<p><a href="https://github.com/Zaxoosh/OpenCord-Revived/stargazers"><img alt="Stars" src="https://img.shields.io/badge/Stars-0-181717?style=flat&logo=github&logoColor=white"></a>&nbsp;&nbsp;<a href="LICENSE"><img alt="License" src="https://img.shields.io/badge/License-GPL--3.0--or--later-blue?style=flat"></a>&nbsp;&nbsp;<a href="package.json"><img alt="Version" src="https://img.shields.io/badge/Version-1.14.16.0-blue?style=flat"></a>&nbsp;&nbsp;<a href="https://www.typescriptlang.org/"><img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-6.0.2-3178C6?style=flat&logo=typescript&logoColor=white"></a>&nbsp;&nbsp;<a href="https://pnpm.io/"><img alt="pnpm" src="https://img.shields.io/badge/pnpm-11.8.0-F69220?style=flat&logo=pnpm&logoColor=white"></a>&nbsp;&nbsp;<a href="https://equicord.org/discord"><img alt="Discord" src="https://img.shields.io/discord/1173279886065029291.svg?color=5865F2&label=Discord&logo=discord&logoColor=white"></a></p>

<strong>Plugin collections</strong><br>
<p><a href="https://github.com/Vendicated/Vencord"><img alt="Vencord logo" src="https://github.com/Vendicated.png?size=20" height="20"></a>&nbsp;<a href="https://github.com/Vendicated/Vencord"><img alt="Vencord plugins" src="https://img.shields.io/badge/Vencord-164-5865F2?style=flat"></a>&nbsp;&nbsp;<a href="https://github.com/Equicord/Equicord"><img alt="Equicord logo" src="https://github.com/Equicord.png?size=20" height="20"></a>&nbsp;<a href="https://github.com/Equicord/Equicord"><img alt="Equicord plugins" src="https://img.shields.io/badge/Equicord-200-768AD4?style=flat"></a>&nbsp;&nbsp;<a href="https://github.com/TestcordDev/TestCord"><img alt="TestCord logo" src="assets/branding/testcord-icon.png" height="20"></a>&nbsp;<a href="https://github.com/TestcordDev/TestCord"><img alt="TestCord plugins" src="https://img.shields.io/badge/TestCord-403-111827?style=flat"></a>&nbsp;&nbsp;<a href="https://github.com/ImHisako/Illegalcord"><img alt="Illegalcord logo" src="assets/branding/illegalcord-icon.png" height="20"></a>&nbsp;<a href="https://github.com/ImHisako/Illegalcord"><img alt="Illegalcord plugins" src="https://img.shields.io/badge/Illegalcord-65-8B5CF6?style=flat"></a>&nbsp;&nbsp;<a href="https://github.com/MallCord/MallCord"><img alt="MallCord logo" src="assets/branding/mallcord-icon.png" height="20"></a>&nbsp;<a href="https://github.com/MallCord/MallCord"><img alt="MallCord plugins" src="https://img.shields.io/badge/MallCord-267-10B981?style=flat"></a>&nbsp;&nbsp;<a href="https://github.com/Chaython/EquicordPlus"><img alt="Equicord+ logo" src="assets/branding/equicordplus-icon.png" height="20"></a>&nbsp;<a href="https://github.com/Chaython/EquicordPlus"><img alt="Equicord+ plugins" src="https://img.shields.io/badge/Equicord%2B-17-F59E0B?style=flat"></a>&nbsp;&nbsp;<a href="https://github.com/LOSTSTR/Esharq"><img alt="Esharq logo" src="assets/branding/esharq-icon.png" height="20"></a>&nbsp;<a href="https://github.com/LOSTSTR/Esharq"><img alt="Esharq plugins" src="https://img.shields.io/badge/Esharq-18-EF4444?style=flat"></a>&nbsp;&nbsp;<a href="https://github.com/MasuRii/OpenCord"><img alt="OpenCord logo" src="assets/branding/opencord-symbol-dark.svg" height="20"></a>&nbsp;<a href="https://github.com/MasuRii/OpenCord"><img alt="OpenCord plugins" src="https://img.shields.io/badge/OpenCord-3-0F172A?style=flat"></a></p>

[Features](#features) · [Plugin Collections](#plugin-collections) · [Installation](#installation) · [Contributing](#contributing)

</div>

---

## Features

| Feature | Description |
|---|---|
| 1137 plugin source folders | Combines Vencord, Equicord, TestCord, Illegalcord, MallCord, Equicord+, Esharq, and OpenCord plugins. |
| About 795 visible plugins | Approximates the desktop in-app settings list; it can be lower because source folders include duplicate names, API/core helpers, and platform or dev-targeted entries filtered out at build time. |
| Cross-platform builds | Supports desktop injection and browser extension builds for Windows, macOS, Linux, and web. |
| Developer friendly | TypeScript, React, webpack utilities, hot watch builds, and plugin-specific folders. |
| Community driven | Plugin collections come from multiple open source communities and individual maintainers. |
| Open source | Distributed under GPL-3.0-or-later. |

---

## Plugin Collections

| Collection | Plugins | Source |
|---|---:|---|
| Vencord | 164 | [Vendicated/Vencord](https://github.com/Vendicated/Vencord) |
| Equicord | 200 | [Equicord/Equicord](https://github.com/Equicord/Equicord) |
| TestCord | 403 | [TestcordDev/TestCord](https://github.com/TestcordDev/TestCord) |
| Illegalcord | 65 | [ImHisako/Illegalcord](https://github.com/ImHisako/Illegalcord) |
| MallCord | 267 | [MallCord/MallCord](https://github.com/MallCord/MallCord) |
| Equicord+ | 17 | [Chaython/EquicordPlus](https://github.com/Chaython/EquicordPlus) |
| Esharq | 18 | [LOSTSTR/Esharq](https://github.com/LOSTSTR/Esharq) |
| OpenCord | 3 | [MasuRii/OpenCord](https://github.com/MasuRii/OpenCord) |

<details>
<summary><strong>Where plugin folders live</strong></summary>

```text
src/plugins/                 Vencord plugins
src/equicordplugins/         Equicord plugins
src/testcordplugins/         TestCord plugins
src/illegalcordplugins/      Illegalcord plugins
src/mallcordplugins/         MallCord plugins
src/equicordplusplugins/     Equicord+ plugins
src/esharqplugins/           Esharq plugins
src/opencordplugins/         OpenCord plugins
```

</details>

---

## Installation

Packaged installers are listed on the [OpenCord Revived releases page](https://github.com/Zaxoosh/OpenCord-Revived/releases). You can also build from source. For source builds, the injection command uses the Revived installer when available and falls back to the original OpenCord installer before the first release. Both installers are based on [Equilotl](https://github.com/Equicord/Equilotl). In development mode they point Discord at the locally built Revived archive.

### Dependencies

| Dependency | Version |
|---|---|
| Node.js | 24 (tested) |
| pnpm | 11.8.0 |
| Git | Current stable |

Install pnpm globally if needed:

```shell
npm i -g pnpm@11.8.0
```

### Build from source

```shell
git clone https://github.com/Zaxoosh/OpenCord-Revived.git
cd OpenCord-Revived
pnpm install --frozen-lockfile
pnpm build --disable-updater
pnpm inject
```

Run `pnpm uninject` to remove the desktop patch. The startup fix has been verified on Discord Stable for Windows.

### Web extension build

```shell
pnpm buildWeb
```

After building the web extension, locate the ZIP file in `dist` and follow your browser's custom extension installation guide. Firefox extension ZIPs require Firefox Developer Edition.

> [!WARNING]
> Do not run inject/build commands from an admin or root terminal. It can damage your Discord/OpenCord installation and force a reinstall.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Language | TypeScript |
| Runtime | Node.js 24 (tested) |
| Package manager | pnpm 11.8.0 |
| UI | React through Discord-native components |
| Bundling | Custom webpack-based build pipeline |
| Styling | CSS plus managed runtime styles |
| Validation | TypeScript, ESLint, Stylelint, patch linting, and build checks |

---

## Contributing

1. Fork the repository.
2. Create a branch: `git checkout -b feature/amazing-feature`.
3. Make a focused change that follows `AGENTS.md`.
4. Commit with a clear message.
5. Push and open a pull request.

Report bugs and crashes through [GitHub Issues](https://github.com/Zaxoosh/OpenCord-Revived/issues).

---

## Credits

Thank you to [MasuRii](https://github.com/MasuRii) and the original OpenCord contributors, [Vendicated](https://github.com/Vendicated) for creating [Vencord](https://github.com/Vendicated/Vencord), [Equicord](https://github.com/Equicord/Equicord) and its contributors for building on that foundation, and [Suncord](https://github.com/verticalsync/Suncord) by [verticalsync](https://github.com/verticalsync) for helping when needed.

---

## Star History

<a href="https://star-history.com/#Zaxoosh/OpenCord-Revived&Timeline">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/svg?repos=Zaxoosh/OpenCord-Revived&type=Timeline&theme=dark" />
    <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/svg?repos=Zaxoosh/OpenCord-Revived&type=Timeline" />
    <img alt="OpenCord star history chart" src="https://api.star-history.com/svg?repos=Zaxoosh/OpenCord-Revived&type=Timeline" />
  </picture>
</a>

---

## License

Distributed under the [GPL-3.0-or-later](LICENSE) license.

---

## Disclaimer

Discord is a trademark of Discord Inc., mentioned here solely for descriptive purposes. This project is not affiliated with or endorsed by Discord Inc.

OpenCord Revived is maintained independently of OpenCord, Equicord, and Vencord.

Review [Discord’s Terms of Service](https://discord.com/terms) before installing a client modification.
