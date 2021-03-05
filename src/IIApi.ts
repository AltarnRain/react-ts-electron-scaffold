export interface IApi {
    send<T>(channel: string, data?: T[]): void
    receive<T>(channel: string, func: (data: T[]) => void): void;
}