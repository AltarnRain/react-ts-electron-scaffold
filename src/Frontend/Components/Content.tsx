/**
 * @preserve Copyright 2019-2020 Onno Invernizzi.
 * This source code is subject to terms and conditions.
 * See LICENSE.MD.
 */

import React, { ReactElement } from "react";

/**
 * Module:          Content
 * Responsibility:  Show the content of a folder or drive
 */

export function Content(props: { folder: string }): ReactElement {

    return (
        <>
            <div>Selected:</div>
            <div>{props.folder}</div>
        </>
    );
}