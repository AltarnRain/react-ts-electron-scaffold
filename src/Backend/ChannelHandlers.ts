/**
 * @preserve Copyright 2019-2020 Onno Invernizzi.
 * This source code is subject to terms and conditions.
 * See LICENSE.MD.
 */

/**
 * Module:          ChannelHandlers
 * Responsibility:  Exports functions used in the Api. These are defined in a seperate file to facilitate debugging API calls.
 */

import { ipcRenderer } from "electron";
import { Channels, ResponseModel } from "../Typings";

const Whitelist: Channels[] = [
    "SayHello",
]

export function sendAndReceive<T>(channel: Channels, model?: T): Promise<ResponseModel<T>> {
    return new Promise((resolve) => {
        if (Whitelist.indexOf(channel) > -1) {
            // Register a once listen action to handle the reply.
            ipcRenderer.once(channel, (_, args) => resolve(args[0]));
            ipcRenderer.send(channel, [model]);
        }
    });
}

export function send<T>(channel: Channels, model?: T): void {
    // If the channel is white listed, send the data to the backend.
    if (Whitelist.indexOf(channel) > -1) {
        ipcRenderer.send(channel, [model]);
    }
}

export function receive<T>(channel: Channels): Promise<T> {
    return new Promise((resolve, reject) => {
        if (Whitelist.indexOf(channel) > -1) {
            // Do not allow  the event object in the web part.
            ipcRenderer.on(channel, (_, args) => resolve(args[0]));
        } else {
            reject(`Channel ${channel} is not whitelisted.`);
        }
    });
}
