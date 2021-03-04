import React, { ReactElement, useEffect, useState } from "react";
export function App(): ReactElement {

    const [text, setText] = useState<string[]>([]);

    useEffect(() => {
        // ipcRenderer.on("getDrives", (event, args: string[])=> {
        //     setText(args);
        // });
    }, []);

    return (
        <div>
            <div>Hello from react</div>
            <div>{text}</div>
        </div >
    )
}