import { ipcMain } from "electron";
import { Channels, IIntermediate } from "../Typings";
import { Intermediate } from "./Intermediate";

registerIcpOn("Succes", "succes");

function registerIcpOn(channel: Channels, handler: keyof IIntermediate): void {
    ipcMain.on(channel, (event, args) => {

        // Cast to any so we can spread args in the method call. This is save, the arguments
        // and return type are all typed and expected.
        const method = Intermediate[handler] as any;
        const response = method(...args);
        event.sender.send(channel, response);
    });
}