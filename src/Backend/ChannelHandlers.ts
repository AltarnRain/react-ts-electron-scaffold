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

/**
 * send a request object and response immediately.
 * @param {Channels} channel A channel
 * @param {T} requestModel An optional request model
 * @returns {Prmose<ResponseModel<T>>} A promise with a response model.
 */
export function sendAndReceive<T>(channel: Channels, requestModel?: T): Promise<ResponseModel<T>> {
    return new Promise((resolve) => {
        if (Whitelist.indexOf(channel) > -1) {
            // Register a once listen action to handle the reply.
            ipcRenderer.once(channel, (_, args) => resolve(args[0]));
            ipcRenderer.send(channel, [requestModel]);
        }
    });
}

/**
 * Sends a request over a channel.
 * @param {Channels} channel A channel.
 * @param {T} requestModel A request model.
 */
export function send<T>(channel: Channels, requestModel?: T): void {
    // If the channel is white listed, send the data to the backend.
    if (Whitelist.indexOf(channel) > -1) {
        ipcRenderer.send(channel, [requestModel]);
    }
}

/**
 * Listens for a response for a channel.
 * @param {Channels} channel A channel
 */
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
