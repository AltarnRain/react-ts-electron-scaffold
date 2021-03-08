/**
 * @preserve Copyright 2019-2020 Onno Invernizzi.
 * This source code is subject to terms and conditions.
 * See LICENSE.MD.
 */

import { IMediator } from "./IMediator";

/**
 * Module:          Channels
 * Responsibility:  Type valid channels.
 */

/**
 * Channels are typed to keys of IMediator. This means they're unique are implicitely bound to a send and receive call.
 */
export type Channels = keyof IMediator;
