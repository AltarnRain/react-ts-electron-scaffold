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
import { handleResponse } from "./HandleResponse";

export function App(): ReactElement {

    const [text, setText] = useState("");
    const [text2, setText2] = useState("");

    async function click(): Promise<void> {
        handleResponse(
            await sendAndReceive<string>("Succes"),
            (x) => setText(x));
    }

    async function click2(): Promise<void> {
        handleResponse(
            await sendAndReceive<string>("Error"),
            (x) => setText(x));
    }

    async function click3(): Promise<void> {
        const response = await sendAndReceive<string>("PassParameters", "a", "b");
        handleResponse(
            response,
            (x) => setText2(x));
    }

    return (
        <div style={{display: "flex", flexDirection: "column"}} >
            <div>Hello from react</div>
            <button onClick={click}>Click me for succes</button>
            <div>{text}</div>
            <button onClick={click2}>Click me for error</button>
            <button onClick={click3}>Click me for a send and receive with parameters</button>
            <div>{text2}</div>
        </div>
    )
}