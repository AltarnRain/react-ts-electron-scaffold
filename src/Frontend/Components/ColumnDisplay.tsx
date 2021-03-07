/**
 * @preserve Copyright 2019-2020 Onno Invernizzi.
 * This source code is subject to terms and conditions.
 * See LICENSE.MD.
 */

import React, { ReactElement } from "react";

/**
 * Module:          Rows
 * Responsibility:  Show child component in rows.
 */

export function ColumnDisplay(props: { children: ReactElement[] | ReactElement }): ReactElement {
    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            {
                props.children
            }
        </div>
    );
}
