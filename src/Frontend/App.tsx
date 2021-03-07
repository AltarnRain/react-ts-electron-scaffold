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
import { handleResponse } from "./Helpers/HandleResponse";
import { FrontendMediator } from "./Helpers/FrontendMediator";

export function App(): ReactElement {

    const [text1, setText1] = useState("");

    async function click(): Promise<void> {
        handleResponse(
            await FrontendMediator.doCall("My value", 1234),
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