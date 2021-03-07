/**
 * @preserve Copyright 2019-2020 Onno Invernizzi.
 * This source code is subject to terms and conditions.
 * See LICENSE.MD.
 */

import { ResponseModel } from "../../Types/ResponseModel";

/**
 * Module:          HandleResponse
 * Responsibility:  Simple response handler.
 */

/**
 * handleResponse
 * @param {ResponseModel<R>} response A Response object.
 * @param {(value: R) => void} succes Called when the response succes flag is true.
 * @param {{error: string} => void} error Called when the response succes flag is false.
 */
export function handleResponse<R>(
    response: ResponseModel<R>,
    succes: (value: R) => void,
    error?: (error: string) => void): void {

    if (response.success) {
        succes(response.model);
    } else {
        if (typeof error === "function") {
            error(response.error as string);
        }
    }
}