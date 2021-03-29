import { NodeCliDataConfig, NodeCliDataEvent } from "./types";

/**
 * Returns a handler to process stdout/stderr data
 * @param {string} type - value for type to pass along with each data event
 * @param {NodeCliDataConfig} dataConfig - configuration related to how data is returned
 * @returns {(data: any) => void}
 */
 export function createDataHandler(type: NodeCliDataEvent<unknown>["type"], dataConfig: NodeCliDataConfig): (data: any) => void {
    if (dataConfig.onData) {
        if (dataConfig.format === "raw") {
            const onData = dataConfig.onData;
            return (data: any) => onData({type, data});
        } else if (dataConfig.format === "line") {
            const onData = dataConfig.onData;
            return (data: any) => `${data}`.split("\n").forEach((line) => onData({type, data: line}));
        } else {
            const onData = dataConfig.onData;
            return (data: any) => onData({type, data: `${data}`});
        }
    } else {
        throw new Error("Could not create handler: missing onData callback");
    }
}
