import React, { ReactElement, useEffect, useState } from "react";
import { api } from "./Api";


export function App(): ReactElement {

    const [text, setText] = useState<string[]>([]);

    useEffect(() => {
        api().receive<string>("fromMain", (data) => {
            setText(data);
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
        </div >
    )
};