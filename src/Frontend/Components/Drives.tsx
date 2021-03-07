/**
 * @preserve Copyright 2019-2020 Onno Invernizzi.
 * This source code is subject to terms and conditions.
 * See LICENSE.MD.
 */

import React, { ReactElement, useEffect, useState } from "react";
import { Button } from "reactstrap";
import { FrontendMediator } from "../Helpers/FrontendMediator";
import { handleResponse } from "../Helpers/HandleResponse";

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
        <div style={{display:"flex", flexDirection: "column"}}>
            {
                drives.map(d => <Button key={d} >{d}</Button>)
            }
        </div>
    );
}
