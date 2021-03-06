/**
 * @preserve Copyright 2019-2020 Onno Invernizzi.
 * This source code is subject to terms and conditions.
 * See LICENSE.MD.
 */

/**
 * Module:          App
 * Responsibility:  React app.
 */

import React, { ReactElement, useEffect, useState } from "react";
import { api } from "./Api";

export function App(): ReactElement {

    const [text, setText] = useState("");

    useEffect(() => {
        api().receive<string>("fromMain", (data) => {
            if (data.success && data.model !== undefined) {
                setText(data.model);
            } else {
                setText("There was an error");
            }
        });
    }, []);

    function click(): void {
        api().send("toMain");
    }

    return (
        <div>
            <div>Hello from react</div>
            <button onClick={click}>Click me</button>
            <div>{text}</div>
        </div>
    )
}