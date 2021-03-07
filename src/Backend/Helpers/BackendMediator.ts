import { ResponseModel } from "../../Types/ResponseModel";
import { IMediator as IMediator } from "../../Types/IMediator";

class BackendMediatorInternal implements IMediator {
    public async doCall(param1: string, param2: number): Promise<ResponseModel<string>> {
        // Do the needful
        const m = `${param1}_${param2}`;

        return {
            success: true,
            model: m,
        };
    }
}

export const BackendMediator = new BackendMediatorInternal();