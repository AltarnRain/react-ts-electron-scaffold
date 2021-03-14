/**
 * @preserve Copyright 2019-2020 Onno Invernizzi.
 * This source code is subject to terms and conditions.
 * See LICENSE.MD.
 */

/**
 * Module:          BackendMediator
 * Responsibility:  Handles all requests from the client and responds.
 */

import { ResponseModel } from "../../Types/ResponseModel";
import { IMediator as IMediator } from "../../Types/IMediator";
import { listDrives } from "../Drive/ListDrives";
import { ContentModel } from "../../Types/ContentModel";
import { listFolderContent } from "../Drive/ListFolderContent";

export const BackendMediator: IMediator = {
    listDrives: async (): Promise<ResponseModel<string[]>> => {
        return {
            succes: true,
            model: await listDrives(),
        };
    },
    listContent: async (folder: string): Promise<ResponseModel<ContentModel[]>> => {
        return {
            succes: true,
            model: await listFolderContent(folder),
        };
    }
};