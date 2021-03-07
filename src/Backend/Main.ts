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

async function createWindow(): Promise<void> {

    const preload = path.join(app.getAppPath(), "../Backend/Preload.js");

    const win = new BrowserWindow({
        width: 1280,
        height: 1024,
        webPreferences: {
            // VERY DANGEROUS when loading external content but required for using this scaffold.
            // this also means you can pull in losts of NodeJs modules and do cool stuff like
            // access the file system from a react app.
            nodeIntegration: false,
            // Required to be false since electron 12 to use node integration.
            contextIsolation: true,
            preload: preload,
        },
    });

    // Ensures the dev console opens automatically when you start the application.
    win.webContents.toggleDevTools();

    // Load index.html from (./js)/Frontend
    // Note: this automatically sets the root path of the 'web' application. So, ensure index.html is in the root of your frontend code's output.
    await win.loadFile("../../index.html");
}

// when the app is ready electron is in a position to create the window.
app.on("ready", async () => {

    // Lazy load this module. This registers all ICP main calls the frontend can do.
    import("./Helpers/RegisterICPMainCalls");
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