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

/**
 * Implement any call you want to implement here. If you add a call, run 'Generate.cmd' from the root of the project.
 * This ensures the FrontendMediator object is generated properly.
 */
export interface IMediator {
    async listDrives: () => Promise<ResponseModel<string[]>>;
    async listContent: (folder: string) => Promise<ResponseModel<ContentModel[]>>;
}
