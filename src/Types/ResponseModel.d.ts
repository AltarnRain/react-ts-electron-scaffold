/**
 * @preserve Copyright 2019-2020 Onno Invernizzi.
 * This source code is subject to terms and conditions.
 * See LICENSE.MD.
 */
/**
 * Module:          Typings
 * Responsibility:  Define a response model. Every response from the Backend (=Main process) is provided using a ResponseModel.
 */

/**
 * Definition for a response model.
 */
export interface ResponseModel<T> {
    /**
     * True means everything worked, false means there is an error.
     */
    succes: boolean;

    /**
     * A model of type T. Can be anything.
     */
    model?: T;

    /**
     * An error message if an error occured.
     */
    error?: string;
}
