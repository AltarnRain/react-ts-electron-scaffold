/**
 * @preserve Copyright 2019-2021 Onno Invernizzi.
 * This source code is subject to terms and conditions.
 * See LICENSE.MD.
 */

/**
 * Module:          ConfigureRequire.Test
 * Responsibility:  Tests the Configure Require class.
 */

import { ConfigureRequire } from "../Frontend/ConfigureRequire";

describe("configure require tests", () => {
    it("can provide a valid config object", () => {
        // Arrange
        const configure = new ConfigureRequire();

        const myModule1 = "my_module1";
        const myPath1 = "my/path/file1";

        const myModule2 = "my_module2";
        const myPath2 = "my/path/file2";

        const myModule3 = "my.module.3";
        const myPath3 = "my/path/file2";

        // Act
        configure
            .registerModule(myModule1, myPath1)
            .registerModule(myModule2, myPath2)
            .registerModule(myModule3, myPath3);

        // Assert
        const configuration = configure.getConfig();

        expect(configuration).toBeDefined();
        expect(configuration.paths).toBeDefined();
        const paths = configuration.paths as { [key: string]: string };
        expect(paths[myModule1]).toBeDefined();
        expect(paths[myModule1].indexOf(myPath1)).toBeGreaterThan(0);

        expect(paths[myModule2]).toBeDefined();
        expect(paths[myModule2].indexOf(myPath2)).toBeGreaterThan(0);

        expect(paths[myModule3]).toBeUndefined();

        const validName = "mymodule3" + "_" + configure.uniqueIdentifier;
        expect(paths[validName]).toBeDefined();
        expect(configuration.map).toBeDefined();

        const map = configuration.map as {
            [id: string]: {
                [id: string]: string;
            };
        };

        expect(map["*"]).toBeDefined();

        const maps = map["*"];

        expect(maps[validName]).toBe(myModule3);
    });
});