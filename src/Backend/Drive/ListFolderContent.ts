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

export async function listFolderContent(folder: string): Promise<ContentModel[]> {
    return new Promise((resolve) => {
        if (folder === "") {
            resolve([]);
        } else {

            if (folder.endsWith(":")) {
                folder += "\\";
            }

            readdir(folder, (error, files) => {
                if (error) {
                    resolve([]);
                } else {
                    const returnValue: ContentModel[] = [];
                    for (const file of files) {

                        const fullPath = path.join(folder, file);

                        try {
                            const stats = lstatSync(fullPath);

                            returnValue.push({
                                name: file,
                                isFolder: stats.isDirectory(),
                            });
                        } catch {
                            // Do nothing. Not all folder are accedible
                        }
                    }

                    resolve(returnValue);
                }
            });
        }
    });
}