/*
 * OpenCord, a Discord client mod
 * Copyright (c) 2026 OpenCord contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { relative } from "node:path";
import ts from "typescript";

const importedCollections = new Set([
    "equicordplugins", "equicordplusplugins", "esharqplugins",
    "illegalcordplugins", "mallcordplugins", "testcordplugins", "userplugins"
]);

function isCoreDiagnostic({ file }) {
    if (!file) return true;
    const [root, collection, plugin] = relative(process.cwd(), file.fileName).split(/[\\/]/);
    return root !== "src" || !importedCollections.has(collection) || plugin === "_api" || plugin === "_core";
}

const host = {
    ...ts.sys,
    onUnRecoverableConfigFileDiagnostic(diagnostic) {
        console.error(ts.flattenDiagnosticMessageText(diagnostic.messageText, "\n"));
        process.exit(1);
    }
};
const config = ts.getParsedCommandLineOfConfigFile("tsconfig.json", { noEmit: true }, host);
const program = ts.createProgram(config.fileNames, config.options);
const diagnostics = [...config.errors, ...ts.getPreEmitDiagnostics(program)].filter(isCoreDiagnostic);

if (diagnostics.length) {
    console.error(ts.formatDiagnosticsWithColorAndContext(diagnostics, {
        getCanonicalFileName: ts.sys.useCaseSensitiveFileNames ? fileName => fileName : fileName => fileName.toLowerCase(),
        getCurrentDirectory: ts.sys.getCurrentDirectory,
        getNewLine: () => ts.sys.newLine
    }));
    process.exitCode = 1;
} else {
    console.log("Core and fork-maintained plugins passed TypeScript checking.");
}
