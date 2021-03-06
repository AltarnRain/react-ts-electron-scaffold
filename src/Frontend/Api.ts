import { IApi } from "../IIApi";

// Wrapper function for the API
export function api(): IApi {
    // OI: Only way to access the window object is using any.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (window as any).api;
}