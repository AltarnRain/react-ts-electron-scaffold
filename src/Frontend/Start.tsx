import React from "react";
import { render } from "react-dom";
import { App } from "./App";


export function start(): void {
    // Grab the div node we want to mount our main app on and render.
    const root = document.getElementById("root");
    render(<App />, root);
}
