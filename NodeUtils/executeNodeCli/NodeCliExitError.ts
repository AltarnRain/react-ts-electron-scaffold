/**
 * Custom error containing all relevant information to an unexpected termination
 */
export class NodeCliExitError extends Error {
    /**
     * The exit code of the process.
     * The value `null` means no exit code was given.
     * This value cannot be zero.
     */
    public readonly exitCode: number | null;

    /**
     * The signal with which the process was terminated, if any
     */
    public readonly signal?: NodeJS.Signals  | null;

    /**
     * If the process caused an error, it will be passed in this property
     */
    public readonly internalError?: Error;

    /**
     * NodeCliExitError constructor
     * @param {string} message - the error message
     * @param {number | null} [exitCode] - the exit code
     * @param {NodeJS.Signals | null} signal - the signal with which the process was terminated
     * @param {Error} [internalError] - the error caused by the process, if any
     */
    constructor(message: string, exitCode: number | null, signal?: NodeJS.Signals | null, internalError?: Error) {
        super(message);
        this.exitCode = exitCode;
        this.signal = signal;
        this.internalError = internalError;
    }
}
