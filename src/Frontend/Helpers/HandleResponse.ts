/**
 * @preserve Copyright 2019-2020 Onno Invernizzi.
 * This source code is subject to terms and conditions.
 * See LICENSE.MD.
 */

import { ResponseModel } from "../../Types/ResponseModel";
import { SuccesResponseModel } from "../../Types/SuccesResponseModel";
import { ErrorResponseModel } from "../../Types/ErrorResponseModel";

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

    if (isSucces(response)) {
        succes(response.model);
    } else if (isError(response) && typeof error === "function") {
        error(response.error);
    } else {
        // Do nothing.
    }
}

function isSucces<R>(value: ResponseModel<R>): value is SuccesResponseModel<R> {
    return value && value.succes;
}

function isError(value: ResponseModel<any>): value is ErrorResponseModel {
    return value && !value.succes;
}