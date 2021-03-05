export interface IApi {
    send: (channel: string, ...data: any[]) => void;
    receive: (channel: string, func: (...data: any[]) => void) => void;
}