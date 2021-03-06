/**
 * @preserve Copyright 2010-2020 iVention b.v.
 * This source code is subject to terms and conditions of the iVention b.V.
 * Public License. a copy of the license can be found in the License.html
 * file at the root of this distribution. If you cannot locate the
 * License, please send an email to support@ivention.nl
 * By using this source code in any fashion, you are agreeing to be bound
 * by the terms of the iVention software License. You must not remove this
 * notice, or any other, from this software.
 */

/**
 * Module:          ICPHandler
 * Responsibility:  Handlers ICP requests from the frontend.
 */

import { ipcMain, IpcMainEvent } from "electron";
import { Channels, ResponseModel } from "../Typings";

export function registerICPHandlers(): void {
    register("SayHello", (event) => {
        event.sender.send("SayHello", replySuccess("hello"));
    });
}

function replySuccess<T>(model: T): ResponseModel<T>[] {
    return [{
        success: true,
        model,
    }]
}

// OI: Wrapper function for registering a listener but only for known channels.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function register(channel: Channels, listener: (event: IpcMainEvent, ...args: any[]) => void): void {
    ipcMain.on(channel, listener);
}