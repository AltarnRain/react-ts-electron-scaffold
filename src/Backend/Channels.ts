/**
 * @preserve Copyright 2019-2020 Onno Invernizzi.
 * This source code is subject to terms and conditions.
 * See LICENSE.MD.
 */

/**
 * Module:          Channels
 * Responsibility:  Define channels the Render process can use to send and receive via ICP.
 */

export const Channels = {
    send: [
        "toMain"
    ],
    receive: [
        "fromMain"
    ],
}