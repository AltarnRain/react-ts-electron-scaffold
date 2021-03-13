/**
 * @preserve Copyright 2019-2020 Onno Invernizzi.
 * This source code is subject to terms and conditions.
 * See LICENSE.MD.
 */

/**
 * Module:          BackendMediator
 * Responsibility:  Handles all requests from the client and responds.
 */

import { ResponseModel } from "../../Types/ResponseModel";
import { IMediator as IMediator } from "../../Types/IMediator";

export const BackendMediator: IMediator = {
    doCall: async(param1: string, param2: number): Promise<ResponseModel<string>> => {
        const m = `${param1}_${param2}`;

        return {
            succes: true,
            model: m,
        };
    },
    multiple: async(a, b): Promise<ResponseModel<number>> => {
        return {
            succes: true,
            model: a * b,
        };
    }
};