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

/**
 * DO NOT RENAME THIS FILE OR EXTEND THIS INTERFACE.
 * This interface is used to type the front and backend calls but it is also used to generate code.
 * Src/Generated/Channels.ts is build using this interface. If you rename this file THAT WILL NO LONGER WORK!
 */

import { ResponseModel } from "./ResponseModel";

/**
 * Implement any call you want to implement here. If you add a call, run 'Generate.cmd' from the root of the project.
 * This ensures the FrontendMediator object is generated properly.
 */
export interface IMediator {
    doCall: (param1: string, param2: number) => Promise<ResponseModel<string>>;

    multiple: (a: number, b:number) => Promise<ResponseModel<number>>;
}