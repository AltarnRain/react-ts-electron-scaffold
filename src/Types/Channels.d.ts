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
 * It also means typo's for channels are impossible since the code that handles this requires a channel to be known
 * as a property in IMediator.
 */
export type Channels = keyof IMediator;
