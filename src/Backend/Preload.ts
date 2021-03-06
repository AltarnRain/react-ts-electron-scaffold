/**
 * @preserve Copyright 2019-2020 Onno Invernizzi.
 * This source code is subject to terms and conditions.
 * See LICENSE.MD.
 */

/**
 * Module:          Preload
 * Responsibility:  Sets up the API the Render process can use via the API object defined on window
 */

/* eslint-disable @typescript-eslint/no-explicit-any */

import { contextBridge, ipcRenderer } from "electron";
import { IApi } from "../IIApi";
import { Channels } from "./Channels";

// Setup api object. Cannot be a class (I tried). The IApi interface is used by the back and frontend to type the exposed methods.
const api: IApi = {
    // This api requires a simple object to send and receives one as well.
    // This'll allow some typing on what we expect to send and to receive.
    // Also much closed to how you'd communicate with a webserver.
    send: <T>(channel: string, model?: T) => {
        // If the channel is white listed, send the data to the backend.
        if (Channels.send.indexOf(channel) > -1) {
            ipcRenderer.send(channel, [model]);
        }
    },
    receive: <T>(channel: string, callback: (model: T) => void) => {
        if (Channels.receive.indexOf(channel) > -1) {
            // Do not allow  the event object in the web part.
            ipcRenderer.on(channel, (_, args) => callback(args[0]));
        }
    }
};

// Use the context bridge to define 'api' on the window object in the browser. Assigning directly to the window object in here
// does not work because the window object when this file loads is NOT the window object in the browser.
contextBridge.exposeInMainWorld("api", api);