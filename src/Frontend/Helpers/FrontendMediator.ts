/**
 * @preserve Copyright 2019-2020 Onno Invernizzi.
 * This source code is subject to terms and conditions.
 * See LICENSE.MD.
 */

/**
 * Module:          FrontendMediator
 * Responsibility:  Handles all calls to the backend.
 */

import { IApi } from "../../Types/IApi";
import { IMediator } from "../../Types/IMediator";
import { ResponseModel } from "../../Types/ResponseModel";
import { Channels } from "../Generated/Channels";

// Grab the sendAndReceive function from the window object. Places there by the Preload.
const sendAndReceive = ((window as any)["40a05040-68be-48b0-859d-cd50b8ad6efa"] as IApi).sendAndReceive;

// Create tne FrontendMediator object and type it as IMediator.
export const FrontendMediator: IMediator = {} as IMediator;

// Iterate and add a property for each call. Every frontend call is the same. A channel name with arguments.
// The arguments are typed by IMediator and so is the response. The implementation details are build in the backend.

for (const call of Channels) {
    FrontendMediator[call] = async (...args: any[]): Promise<ResponseModel<any>> => {
        return await sendAndReceive(call, ...args);
    };
}