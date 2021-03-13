/**
 * @preserve Copyright 2019-2020 Onno Invernizzi.
 * This source code is subject to terms and conditions.
 * See LICENSE.MD.
 */

/**
 * Module:          IMediator
 * Responsibility:  Provide a contract for a mediator class in the front and backend. The mediator classes
 *                  are used to request and handle request from the client while ensuring parameters and response
 *                  are typesafe.
 */

import { ResponseModel } from "./ResponseModel";

export interface IMediator {
    async doCall(param1: string, param2: number): Promise<ResponseModel<string>>;

    async multiple(a: number, b:number): Promise<ResponseModel<number>>;
}