/**
 * @preserve Copyright 2019-2020 Onno Invernizzi.
 * This source code is subject to terms and conditions.
 * See LICENSE.MD.
 */

import React, { ReactElement, useEffect, useState } from "react";
import { Button } from "reactstrap";
import { FrontendMediator } from "../ICP/FrontendMediator";
import { handleResponse } from "../ICP/HandleResponse";
import { ColumnDisplay } from "./ColumnDisplay";

/**
 * Module:          Drives
 * Responsibility:  Lists the drives on the system
 */

function DriveButton(props: { drive: string; selectDrive: (drive: string) => void }): ReactElement {

    function click(): void {
        props.selectDrive(props.drive);
    }

    return (
        <Button onClick={click}>{props.drive}</Button>
    );
}

export function Drives(props: {
    selectDrive(drive: string): void
}): ReactElement {

    const [drives, setDrives] = useState<string[]>([]);

    function selectDrive(drive: string): void {
        props.selectDrive(drive);
    }

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
            <ColumnDisplay>
                {
                    drives.map(d => <DriveButton drive={d} selectDrive={selectDrive} key={d} />)
                }
            </ColumnDisplay>
        </>
    );
}