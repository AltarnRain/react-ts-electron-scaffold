/**
 * @preserve Copyright 2019-2020 Onno Invernizzi.
 * This source code is subject to terms and conditions.
 * See LICENSE.MD.
 */

/**
 * Module:          IApi
 * Responsibility:  Type definition for the API object places on the window object so the frontend can use ICP to request.
 */

import { ResponseModel } from "./ResponseModel";
import { Channels } from "./Channels";

/**
 * Definition for the API object available in the Render process.
 */

export interface IApi {
    sendAndReceive(channel: Channels, ...args: any[]): Promise<ResponseModel<any>>;
}
