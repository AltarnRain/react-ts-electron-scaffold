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

// Grab the sendAndReceive function from the window object. Places there by the Preload.
const sendAndReceive = ((window as any)["40a05040-68be-48b0-859d-cd50b8ad6efa"] as IApi).sendAndReceive;

/**
 * FrontendMediator
 * This object is used for all communication with the backend.
 */
export const FrontendMediator: IMediator = {
    doCall: async (param1: string, param2: number): Promise<ResponseModel<any>> => {
        return await sendAndReceive("doCall", param1, param2);
    }
};