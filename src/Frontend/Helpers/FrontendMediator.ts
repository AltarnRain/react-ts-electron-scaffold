import { IApi } from "../../Types/IApi";
import { IMediator } from "../../Types/IMediator";
import { ResponseModel } from "../../Types/ResponseModel";

// Grab the sendAndReceive function from the window object. Places there by the Preload.
const sendAndReceive = ((window as any).__api_el as IApi).sendAndReceive;

/**
 * FrontendMediator
 * This object is used for all communication with the backend.
 */
export const FrontendMediator : IMediator  = {
    doCall: async(param1: string, param2: number): Promise<ResponseModel<any>> => {
        return await sendAndReceive("doCall", param1, param2);
    }
};