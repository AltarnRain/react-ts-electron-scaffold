import { ResponseModel } from "../../Types/ResponseModel";
import { IMediator as IMediator } from "../../Types/IMediator";
import { listDrives } from "../Drive/ListDrives";

export const BackendMediator: IMediator = {
    listDrives: async(): Promise<ResponseModel<string[]>> => {
        return {
            success: true,
            model: await listDrives(),
        };
    }
};