import { fork } from "child_process";
import { createDataHandler } from "./createDataHandler";
import { NodeCliExitError } from "./NodeCliExitError";
import { NodeCliConfig, NodeCliProcess } from "./types";

/**
 * Execute a node cli js file in a separate thread
 * @param {NodeCliConfig} config
 * @returns {NodeCliProcess}
 */
export function executeNodeCli(config: NodeCliConfig): NodeCliProcess {
    const { filePath, args, cwd } = config;
    const childProcess = fork(filePath, args, { cwd, silent: true });
    let internalError: Error | undefined = undefined;
    const process = new Promise<void>((resolve, reject) => {
        childProcess.on("close", (exitCode, signal) => {
            if (exitCode === 0 || signal === "SIGTERM") {
                resolve(undefined);
            } else {
                reject(new NodeCliExitError("Process exited with non-zero exit code", exitCode, signal, internalError));
            }
        });
    });
    childProcess.on("error", (error) => {
        internalError = error;
    });

    if (childProcess.stdout && config.onData) {
        childProcess.stdout.on("data", createDataHandler("output", config));
    }

    if (childProcess.stderr && config.onData) {
        childProcess.stderr.on("data", createDataHandler("error", config));
    }
    return {
        toPromise: () => process,
        dispose: () => {
            if (!childProcess.killed) {
                childProcess.kill("SIGTERM");
            }
            return process;
        }
    };
}
