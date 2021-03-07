/**
 * @preserve Copyright 2019-2020 Onno Invernizzi.
 * This source code is subject to terms and conditions.
 * See LICENSE.MD.
 */

/**
 * Module:          ListDrives
 * Responsibility:  Returns a list of the local drives on the local machine. Borrowed from StackExchange.
 */

import { spawn } from "child_process";

export function listDrives(): Promise<string[]> {
    const list = spawn("cmd");

    return new Promise((resolve, reject) => {
        list.stdout.on("data", function (data) {
            const output = String(data);
            const out = output.split("\r\n").map(e => e.trim()).filter(e => e != "");
            if (out[0] === "Name") {
                resolve(out.slice(1));
            }
        });

        list.stderr.on("data", function (data) {
            console.log("stderr: " + data);
        });

        list.on("exit", function (code) {
            if (code !== 0) {
                reject(code);
            }
        });

        list.stdin.write("wmic logicaldisk get name\n");
        list.stdin.end();
    });
}
