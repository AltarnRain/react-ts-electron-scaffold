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
import { handleResponse } from "./ICP/HandleResponse";
import { FrontendMediator } from "./ICP/FrontendMediator";

export function App(): ReactElement {

    const [text1, setText1] = useState(0);

    async function click(): Promise<void> {
        handleResponse(
            await FrontendMediator.multiple(5, 1234),
            (x) => setText1(x)
        );
    }

    return (
        <div style={{ display: "flex", flexDirection: "column" }} >
            <div>Hello from react</div>
            <button onClick={click}>Click</button>
            <div>{text1}</div>
        </div>
    );
}