/**
 * @preserve Copyright 2019-2020 Onno Invernizzi.
 * This source code is subject to terms and conditions.
 * See LICENSE.MD.
 */

/**
 * Module:          Preload
 * Responsibility:  Sets up the API the Render process can use via the API object defined on window
 */

import { contextBridge, ipcRenderer } from "electron";
import { Channels } from "../Channels";
import { IApi } from "../IApi";
import { ResponseModel } from "../ResponseModel";

// Setup api object. Cannot be a class (I tried). The IApi interface is used by the back and frontend to type the exposed methods.
const api: IApi = {
    sendAndReceive: sendAndReceive,
};

// Use the context bridge to define 'api' on the window object in the browser. Assigning directly to the window object in here
// does not work because the window object when this file loads is NOT the window object in the browser.
contextBridge.exposeInMainWorld("api", api);

/**
 * send a request object and response immediately.
 * @param {Channels} channel A channel
 * @param {T} requestModel An optional request model
 * @returns {Prmose<ResponseModel<T>>} A promise with a response model.
 */
export function sendAndReceive<T>(channel: Channels, ...args: any): Promise<ResponseModel<T>> {
    return new Promise((resolve) => {
        // Register a once listen action to handle the reply.
        ipcRenderer.once(channel, (_, responseModel) => resolve(responseModel));
        ipcRenderer.send(channel, args);
    });
}