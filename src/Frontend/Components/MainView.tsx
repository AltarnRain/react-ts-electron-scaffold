/**
 * @preserve Copyright 2019-2020 Onno Invernizzi.
 * This source code is subject to terms and conditions.
 * See LICENSE.MD.
 */

import React, { ReactElement } from "react";

/**
 * Module:          MainView
 * Responsibility:  Main view component of the explorer
 */

export function MainView(props: { children: ReactElement[] | ReactElement }): ReactElement {
    return (
        <div style={{ display: "flex", flexDirection: "row" }}>
            {
                props.children
            }
        </div>
    );
}