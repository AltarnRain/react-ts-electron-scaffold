/**
 * @preserve Copyright 2019-2020 Onno Invernizzi.
 * This source code is subject to terms and conditions.
 * See LICENSE.MD.
 */

/**
 * Module:          RegisterICPMainCalls
 * Responsibility:  Import this module to register a call for each method in our mediator class.
 */

import { ipcMain } from "electron";
import { Channels } from "../../Types/Channels";
import { BackendMediator } from "./BackendMediator";

export function registerICPMainCalls(): void {

    // Channels is a type typed to: keyof IMediator.
    // This means each method is a channel so each channel is a method.
    // This allows us to iterate over each method in our mediator class and register an ICPMain.on call
    // for it. This also means we can expand our IMediator interface, update our classes
    // and never having to worry about registering a call.
    for (const key in BackendMediator) {
        registerICIMainOn(key as Channels);
    }

    /**
     * register an ICPMain.on call.
     * @param {Channel} channel A channel/method
     */
    function registerICIMainOn(channel: Channels): void {
        ipcMain.on(channel, (event, args) => {

            // Cast to any so we can spread args in the method call. This is save, the arguments
            // and return type are all typed and expected.
            const method = BackendMediator[channel] as any;

            // Cannot use await here so lets use a then. No need for a catch, we're using a response model
            // and if its succes flag is false the we handle an error.
            method(...args).then((response: any) => {
                event.sender.send(channel, response);
            });
        });
    }
}
