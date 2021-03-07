/**
 * @preserve Copyright 2019-2020 Onno Invernizzi.
 * This source code is subject to terms and conditions.
 * See LICENSE.MD.
 */

/**
 * Module:          ContentModel
 * Responsibility:  Definition of a folder's content.
 */

export interface ContentModel {
    isFolder: boolean;
    name: string;
}