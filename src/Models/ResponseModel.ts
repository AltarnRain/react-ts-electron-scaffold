/**
 * @preserve Copyright 2019-2020 Onno Invernizzi.
 * This source code is subject to terms and conditions.
 * See LICENSE.MD.
 */

/**
 * Module:          ResponseModel
 * Responsibility:  Wrapped Model for every response.
 */

export interface ResponseModel<T> {
    success: boolean;
    model?: T;
    error?: string;
}
