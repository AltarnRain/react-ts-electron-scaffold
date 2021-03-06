/**
 * @preserve Copyright 2019-2020 Onno Invernizzi.
 * This source code is subject to terms and conditions.
 * See LICENSE.MD.
 */

/**
 * Module:          Api
 * Responsibility:  Define the API object used by the frontend to communicate with the backend via ICP.
 */

import { ResponseModel } from "./Models/ResponseModel";

export interface IApi {
    send<T>(channel: string, model?: T): void
    receive<T>(channel: string, func: (model: ResponseModel<T>) => void): void;
}