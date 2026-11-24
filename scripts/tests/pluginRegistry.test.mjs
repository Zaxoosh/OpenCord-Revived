/*
 * OpenCord, a Discord client mod
 * Copyright (c) 2026 OpenCord contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import assert from "node:assert/strict";
import { mkdir, mkdtemp, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { dirname, join, relative } from "node:path";

import { build } from "esbuild";

import { globPlugins } from "../build/common.mjs";

const previousDirectory = process.cwd();
const temporaryDirectory = await mkdtemp(join(tmpdir(), "revived-plugin-registry-"));

try {
    for (const [folder, source] of [
        ["plugins", "first"],
        ["mallcordplugins", "later"],
        ["userplugins", "user override"],
        ["testcordplugins", "excluded"],
    ]) {
        const path = join(temporaryDirectory, "src", folder, source === "excluded" ? "duplicate.web" : "duplicate", "index.ts");
        await mkdir(dirname(path), { recursive: true });
        const definition = JSON.stringify({ name: "SharedPlugin", implementation: source });
        const contents = source === "excluded"
            ? `const definePlugin = value => value; export default definePlugin(${definition});`
            : `export default ${definition};`;
        await writeFile(path, contents);
    }

    process.chdir(temporaryDirectory);
    const { outputFiles } = await build({
        absWorkingDir: temporaryDirectory,
        stdin: {
            contents: 'export { default, PluginMeta, ExcludedPlugins } from "~plugins";',
            resolveDir: temporaryDirectory
        },
        bundle: true,
        write: false,
        format: "esm",
        plugins: [globPlugins("discordDesktop")]
    });
    const { default: plugins, PluginMeta, ExcludedPlugins } = await import(
        `data:text/javascript;base64,${Buffer.from(outputFiles[0].text).toString("base64")}`
    );

    const savedSettings = { SharedPlugin: { enabled: true } };
    assert.deepEqual(Object.keys(plugins), Object.keys(savedSettings));
    assert.equal(plugins.SharedPlugin.implementation, "user override");
    assert.equal(PluginMeta.SharedPlugin.userPlugin, true);
    assert.equal(PluginMeta.SharedPlugin.folderName, "src/userplugins/duplicate");
    assert.equal(Object.hasOwn(ExcludedPlugins, "SharedPlugin"), false);
    console.log("Plugin precedence, metadata, and saved settings key passed.");
} finally {
    process.chdir(previousDirectory);
    const fixtureName = relative(tmpdir(), temporaryDirectory);
    if (/^revived-plugin-registry-[a-z0-9]+$/i.test(fixtureName)) {
        await rm(temporaryDirectory, { recursive: true, force: true });
    }
}
