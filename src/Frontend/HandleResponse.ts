/**
 * @preserve Copyright 2019-2020 Onno Invernizzi.
 * This source code is subject to terms and conditions.
 * See LICENSE.MD.
 */

import { ResponseModel } from "../Typings";
import { showError } from "./ShowError";

/**
 * Module:          HandleResponse
 * Responsibility:  Simple response handler.
 */

export function handleResponse<R>(response: ResponseModel<R>, callBack: (value: R) => void): void {
    if (response.success) {
        callBack(response.model);
    } else {
        showError(response.error);
    }
}