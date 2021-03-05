import { IApi } from "../IIApi";

// Wrapper function for the IcpRenderer.
export function api(): IApi {
    return (window as any).api;
}