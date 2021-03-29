/**
 * Every onData event has this format
 */
export interface NodeCliDataEvent<TData> {
    /**
     * Both stdout and stderr are emitted through onData.
     * Use this property to differentiate between data from stdout and stderr.
     * What is emitted in out and error depends on the cli.
     */
    type: "output" | "error";
    data: TData;
}

type NodeCliBaseConfig = {
    /**
     * Path to the node cli js file to execute
     */
     filePath: string;
     /**
      * Arguments to the cli.
      */
     args?: string[];
     /**
      * In what directory the cli should execute.
      */
     cwd?: string;
}

type NodeCliDataFormatString = {
     /**
     * What format the data should be provided.
     * "string" to cast to string
     * "line" to cast to string and emit by line
     * "raw" to pass as-is
     */
    format?: "string" | "line";
    /**
     * Triggered whenever the thread emits text.
     * @param {NodeCliDataEvent} event
     */
    onData?: (event: NodeCliDataEvent<string>) => void;
}

type NodeCliDataFormatRaw = {
     /**
     * What format the data should be provided.
     * "string" to cast to string
     * "line" to cast to string and emit by line
     * "raw" to pass as-is
     */
    format: "raw"
    /**
     * Triggered whenever the thread emits text.
     * @param {NodeCliDataEvent} event
     */
    onData?: (event: NodeCliDataEvent<unknown>) => void;
}

export type NodeCliConfig = NodeCliBaseConfig & NodeCliDataFormatString | NodeCliBaseConfig & NodeCliDataFormatRaw;

export type NodeCliDataConfig = NodeCliDataFormatString | NodeCliDataFormatRaw;

/**
 * Interface for a started node cli process
 */
export interface NodeCliProcess {
    /**
     * Returns a promise that resolves when the node cli process has exited
     */
    toPromise(): Promise<void>;
    /**
     * Attempts to kill the node cli process.
     * Returns the same promise as field `process`, which should now resolve.
     */
    dispose(): Promise<void>;
}
