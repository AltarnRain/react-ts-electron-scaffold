/**
 * @preserve Copyright 2019-2020 Onno Invernizzi.
 * This source code is subject to terms and conditions.
 * See LICENSE.MD.
 */

/**
 * Module:          Preload
 * Responsibility:  Sets up the API the Render process can use via the API object defined on window
 */

import { contextBridge } from "electron";
import { IApi } from "../Typings";
import { receive, send, sendAndReceive } from "./ChannelHandlers";

// Setup api object. Cannot be a class (I tried). The IApi interface is used by the back and frontend to type the exposed methods.
const api: IApi = {
    // This api requires a simple object to send and receives one as well.
    // This'll allow some typing on what we expect to send and to receive.
    // Also much closed to how you'd communicate with a webserver.
    send: send,
    receive: receive,
    sendAndReceive: sendAndReceive,
};

// Use the context bridge to define 'api' on the window object in the browser. Assigning directly to the window object in here
// does not work because the window object when this file loads is NOT the window object in the browser.
contextBridge.exposeInMainWorld("api", api);