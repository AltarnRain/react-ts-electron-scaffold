import { IApi } from "../../Types/IApi";
import { IMediator } from "../../Types/IMediator";
import { ResponseModel } from "../../Types/ResponseModel";

// Grab the sendAndReceive function from the window object. Places there by the Preload.
const sendAndReceive = ((window as any).api as IApi).sendAndReceive;

class FrontendMediator implements IMediator {
    public async doCall(param1: string, param2: number): Promise<ResponseModel<string>> {
        return await sendAndReceive<string>("doCall", param1, param2);
    }
}

export const Intermediate = new FrontendMediator();