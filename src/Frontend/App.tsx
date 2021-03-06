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
import { sendAndReceive } from "./Api";

export function App(): ReactElement {

    const [text, setText] = useState("");

    async function click(): Promise<void> {
        const response = await sendAndReceive<string>("SayHello");
        if (response.success) {
            setText(response.model);
        }
    }

    return (
        <div>
            <div>Hello from react</div>
            <button onClick={click}>Click me</button>
            <div>{text}</div>
        </div>
    )
}