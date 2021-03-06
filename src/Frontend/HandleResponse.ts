/**
 * @preserve Copyright 2019-2020 Onno Invernizzi.
 * This source code is subject to terms and conditions.
 * See LICENSE.MD.
 */

import { ResponseModel } from "../Typings";

/**
 * Module:          HandleResponse
 * Responsibility:  Simple response handler.
 */

export function handleResponse<R>(
    response: ResponseModel<R>,
    succes: (value: R) => void,
    error?: (error: string | undefined) => void): void {

    if (response.success) {
        succes(response.model);
    } else {
        if (typeof error === "function") {
            error(response.error);
        }
    }
}