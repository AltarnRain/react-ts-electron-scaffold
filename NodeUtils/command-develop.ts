import { executeNodeCli } from "./executeNodeCli";
import path from "path";
import { NodeCliProcess } from "./executeNodeCli/types";

const tscCliPath = require.resolve("typescript/bin/tsc");
const electronCliPath = require.resolve("electron/cli.js");
const rootDir = path.resolve(__dirname, "..");
const srcBackendDir = path.resolve(rootDir, "src", "Backend");
const srcFrontendDir = path.resolve(rootDir, "src", "Frontend");
const electronEntryPoint = path.resolve(rootDir, "js", "Backend", "Main");

/**
 * All in one command to start developing
 */
async function commandWatch(): Promise<void> {
    console.log("Running initial tsc...");
    await commandBuild();
    console.log("Opening electron app and tsc watch tasks...");
    const processes = [
        executeNodeCli({
            filePath: electronCliPath,
            cwd: rootDir,
            args: [electronEntryPoint],
        }),
        tscDirectory("Backend", srcBackendDir, true),
        tscDirectory("Frontend", srcFrontendDir, true),
    ];
    await Promise.race(processes.map((p) => p.toPromise()));
    console.log("Closing processes...");
    await Promise.all(processes.map((p) => p.dispose()));
    console.log("Closed.");
}

/**
 * Only builds Frontend and Backend once
 * @returns {Promise<void>}
 */
function commandBuild(): Promise<void> {
    return Promise.all([
        tscDirectory("Backend", srcBackendDir).toPromise(),
        tscDirectory("Frontend", srcFrontendDir).toPromise(),
    ]).then(() => { /* no code */ });
}

/**
 * Execute tsc in a directory
 * @param {string} label - string added to logging
 * @param {string} directory - absolute path to directory
 * @param {boolean} [watch=false] - whether to execute in watch mode
 * @returns {NodeCliProcess}
 */
function tscDirectory(label: string, directory: string, watch = false): NodeCliProcess {
    return executeNodeCli({
        filePath: tscCliPath,
        cwd: directory,
        args: watch ? ["--watch"] : undefined,
        format: "line",
        onData: (event) => {
            console.log(`TSC ${label}:`, event.data);
        }
    });
}

if (process.argv[2] === "--watch") {
    commandWatch();
} else {
    commandBuild();
}
