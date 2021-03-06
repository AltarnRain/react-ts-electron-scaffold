import { contextBridge, ipcRenderer } from "electron";
import { Channels } from "./Channels";

contextBridge.exposeInMainWorld(
    "api",
    {
        send: <T>(channel: string, data: T[]) => {
            if (Channels.send.indexOf(channel) > -1) {
                ipcRenderer.send(channel, data);
            }
        },
        receive: <T>(channel: string, callback: (...data: T[]) => void) => {
            if (Channels.receive.indexOf(channel) > -1) {
                // Do not allow  the event object in the web part.
                ipcRenderer.on(channel, (_, ...args) => callback(...args));
            }
        }
    });