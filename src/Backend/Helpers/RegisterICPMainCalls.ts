import { ipcMain } from "electron";
import { Channels } from "../../Channels";
import { IMediator } from "../../IMediator";
import { BackendMediator } from "./BackendMediator";

// Register 'Succes' call.
registerIcpOn("Succes", "doCall");

function registerIcpOn(channel: Channels, handler: keyof IMediator): void {
    ipcMain.on(channel, (event, args) => {

        // Cast to any so we can spread args in the method call. This is save, the arguments
        // and return type are all typed and expected.
        const method = BackendMediator[handler] as any;

        // Cannot use await here so lets use a then. No need for a catch, we're using a response model
        // and if its succes flag is false the we handle an error.
        method(...args).then((response: any) => {
            event.sender.send(channel, response);
        });
    });
}