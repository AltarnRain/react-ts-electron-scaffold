/**
 * @preserve Copyright 2019-2020 Onno Invernizzi.
 * This source code is subject to terms and conditions.
 * See LICENSE.MD.
 */

import { lstatSync, readdir } from "fs";
import path from "path";
import { ContentModel } from "../../Types/ContentModel";

/**
 * Module:          ListFolderContent
 * Responsibility:  Lists the contents of a folder.
 */

export async function ListFolderContent(folder: string): Promise<ContentModel[]> {
    return new Promise((resolve) => {
        readdir(folder, (error, files) => {
            if (error) {
                resolve([]);
            } else {
                const returnValue: ContentModel[] = [];
                for (const file of files) {

                    const fullPath = path.join(folder, file);
                    const stats = lstatSync(fullPath);

                    returnValue.push({
                        name: file,
                        isFolder: stats.isDirectory(),
                    });
                }

                resolve(returnValue);
            }
        });
    });
}