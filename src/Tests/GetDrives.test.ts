/**
 * @preserve Copyright 2019-2020 Onno Invernizzi.
 * This source code is subject to terms and conditions.
 * See LICENSE.MD.
 */

import { listDrives } from "../Backend/Drive/ListDrives";

/**
 * Module:          GetDrives.test
 * Responsibility:  Tests the get drives backend function.
 */

describe("GetDrives.test", () => {
    it("should get the drives on the local machine", async (done) => {
        // Act
        const result = await listDrives();

        // Assert
        expect(result.length).toBeGreaterThan(0);
        expect(result[0]).toBeDefined();

        const hasC = result.some(d => d === "C:");
        expect(hasC).toBe(true);

        done();
    });
});