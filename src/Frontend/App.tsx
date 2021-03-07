/**
 * @preserve Copyright 2019-2020 Onno Invernizzi.
 * This source code is subject to terms and conditions.
 * See LICENSE.MD.
 */

/**
 * Module:          App
 * Responsibility:  React app.
 */

import React, { ReactElement, useState } from "react";
import { Content } from "./Components/Content";
import { Drives } from "./Components/Drives";
import { MainView } from "./Components/MainView";
import { ColumnDisplay } from "./Components/ColumnDisplay";

export function App(): ReactElement {

    const [folder, setFolder] = useState("");

    function selectDrive(drive: string): void {
        setFolder(drive);
    }

    return (
        <MainView>
            <Drives selectDrive={selectDrive} />
            <Content folder={folder} />
        </MainView >
    );
}