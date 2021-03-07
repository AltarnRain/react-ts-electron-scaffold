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
import { handleResponse } from "./HandleResponse";
import { Intermediate } from "./Intermediate";

export function App(): ReactElement {

    const [text1, setText1] = useState("");
    // const [text2, setText2] = useState("");
    // const [text3, setText3] = useState("");
    // const [text4, setText4] = useState("");

    // async function click(): Promise<void> {
    //     handleResponse(
    //         await sendAndReceive<string>("Succes"),
    //         (x) => setText1(x));
    // }

    // async function click2(): Promise<void> {
    //     handleResponse(
    //         await sendAndReceive<string>("Error"),
    //         (x) => setText2(x),
    //         (x) => alert(x));
    // }

    // async function click3(): Promise<void> {
    //     handleResponse(
    //         await sendAndReceive<string>("PassParameters", "a", "b"),
    //         (x) => setText3(x));
    // }

    async function click4(): Promise<void> {
        handleResponse(
            await Intermediate.succes("My value", 1234),
            (x) => setText1(x)
        );
    }

    return (
        <div style={{ display: "flex", flexDirection: "column" }} >
            <div>Hello from react</div>
            {/* <button onClick={click}>Click me for succes</button>
            <div>{text}</div>
            <button onClick={click2}>Click me for error</button>
            <button onClick={click3}>Click me for a send and receive with parameters</button>
            <div>{text2}</div> */}
            <button onClick={click4}>Click</button>
            <div>{text1}</div>
        </div>
    );
}