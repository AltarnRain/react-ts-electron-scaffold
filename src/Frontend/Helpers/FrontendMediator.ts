import { IApi } from "../../Types/IApi";
import { IMediator } from "../../Types/IMediator";
import { ResponseModel } from "../../Types/ResponseModel";
import { ContentModel } from "../../Types/ContentModel";

// Grab the sendAndReceive function from the window object. Places there by the Preload.
const sendAndReceive = ((window as any).api as IApi).sendAndReceive;

/**
 * FrontendMediator
 * This object is used for all communication with the backend.
 */
export const FrontendMediator : IMediator  = {
    listDrives: async(): Promise<ResponseModel<any>> => {
        return await sendAndReceive("listDrives");
    },
    listContent: async(folder: string): Promise<ResponseModel<ContentModel[]>> => {
        return await sendAndReceive("listContent", folder);
    }
};