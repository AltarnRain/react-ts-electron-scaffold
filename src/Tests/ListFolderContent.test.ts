/**
 * @preserve Copyright 2019-2020 Onno Invernizzi.
 * This source code is subject to terms and conditions.
 * See LICENSE.MD.
 */

import { listFolderContent } from "../Backend/Drive/ListFolderContent";

/**
 * Module:          ListFolderContent
 * Responsibility:  Tests the list folder content function
 */

describe("list folder content", () => {
    it("should return a list of files", async (done) => {
        // Act - Requires a folder with a subfolder and a file.
        const contents = await listFolderContent("D:/TestFolder");

        // Assert
        expect(contents.length).toBe(2);

        const hasFolder = contents.some(d => d.isFolder);
        const hasFile = contents.some(d => d.isFolder === false);

        expect(hasFile).toBe(true);
        expect(hasFolder).toBe(true);

        done();
    });
});