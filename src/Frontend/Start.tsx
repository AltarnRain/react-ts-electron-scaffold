/**
 * @preserve Copyright 2019-2020 Onno Invernizzi.
 * This source code is subject to terms and conditions.
 * See LICENSE.MD.
 */

/**
 * Module:          Start
 * Responsibility:  Starts App.
 */

import React from "react";
import { render } from "react-dom";
import { App } from "./App";
import "popper.js";

export function start(): void {
    // Grab the div node we want to mount our main app on and render.
    const root = document.getElementById("root");
    render(<App />, root);
}