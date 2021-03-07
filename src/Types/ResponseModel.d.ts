/**
 * @preserve Copyright 2019-2020 Onno Invernizzi.
 * This source code is subject to terms and conditions.
 * See LICENSE.MD.
 */
/**
 * Module:          Typings
 * Responsibility:  d.ts file with shared typings between the front and backend. This is a d.ts file because we're only concerned with typings
 *                  and d.ts files are not compiled. This prevents the backend from compiling typings as common js and the front end as AMD.
 */
/**
 * Definition for a response model.
 */
export interface ResponseModel<T> {
    success: boolean;
    model: T;
    error?: string;
}