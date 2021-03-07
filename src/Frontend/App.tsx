/**
 * @preserve Copyright 2019-2020 Onno Invernizzi.
 * This source code is subject to terms and conditions.
 * See LICENSE.MD.
 */

/**
 * Module:          App
 * Responsibility:  React app.
 */

import React, { ReactElement } from "react";
import { Drives } from "./Helpers/Components/Drives";
import { MainView } from "./Helpers/Components/MainView";

export function App(): ReactElement {

    return (
        <MainView>
            <Drives />

        </MainView >
    );
}