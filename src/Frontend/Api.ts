/**
 * @preserve Copyright 2019-2020 Onno Invernizzi.
 * This source code is subject to terms and conditions.
 * See LICENSE.MD.
 */

/**
 * Module:          Api
 * Responsibility:  Lets the frontend use the api object.
 */

 import { IApi } from "../Typings";

/**
 * Grabs the api object from window and returns it typed as IApi.
 */
export function api(): IApi {
    // OI: Only way to access the window object is using any.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (window as any).api;
}