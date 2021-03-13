/**
 * @preserve Copyright 2019-2020 Onno Invernizzi.
 * This source code is subject to terms and conditions.
 * See LICENSE.MD.
 */
/**
 * Module:          Typings
 * Responsibility:  Define a succes response model. Every response from the Backend (=Main process) is provided using a ResponseModel.
 */

/**
 * Definition for a response model.
 */
 export interface SuccesResponseModel<T> {
    /**
     * True means everything worked, false means there is an error.
     */
    succes: boolean;

    /**
     * A model of type T. Can be anything.
     */
    model: T;
}
