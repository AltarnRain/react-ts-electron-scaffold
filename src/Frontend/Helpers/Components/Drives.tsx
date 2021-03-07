/**
 * @preserve Copyright 2019-2020 Onno Invernizzi.
 * This source code is subject to terms and conditions.
 * See LICENSE.MD.
 */

import React, { ReactElement, useEffect, useState } from "react";
import { FrontendMediator } from "../FrontendMediator";
import { handleResponse } from "../HandleResponse";

/**
 * Module:          Drives
 * Responsibility:  Lists the drives on the system
 */

export function Drives(): ReactElement {

    const [drives, setDrives] = useState<string[]>([]);

    useEffect(() => {
        (async () => {
            handleResponse(
                await FrontendMediator.listDrives(),
                (v) => setDrives(v),
            );
        })();

    }, []);
    return (
        <>
            {
                drives.map(d => <div>{d}</div>)
            }
        </>
    );
}
