/**
 * @preserve Copyright 2019-2020 Onno Invernizzi.
 * This source code is subject to terms and conditions.
 * See LICENSE.MD.
 */

/**
 * Module:          Main
 * Responsibility:  Main process for the backend aka the main process.
 */

import { app, BrowserWindow } from "electron";
import path from "path";
import { registerICPMainCalls } from "./ICP/RegisterICPMainCalls";

async function createWindow(): Promise<void> {

    // Note on __dirname. This works when developing and after packaging/publishing
    // The preload path HAS TO BE a fully specified path. Relative paths do NOT work.
    const preload = path.join(__dirname, "./Preload.js");

    const win = new BrowserWindow({
        width: 1280,
        height: 1024,
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
            preload: preload,
            enableRemoteModule: false,
            sandbox: true,
        },
    });

    // Uncomment line below to toggle the dev tools when the application starts.
    // win.webContents.toggleDevTools();

    await win.loadFile(path.join(__dirname, "../index.html"));
}

// when the app is ready electron is in a position to create the window.
app.on("ready", async () => {
    registerICPMainCalls();
    await createWindow();
});

// Closes the app when all windows are closed.
app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});

app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});