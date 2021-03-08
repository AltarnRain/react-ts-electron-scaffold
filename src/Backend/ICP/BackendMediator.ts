import { ResponseModel } from "../../Types/ResponseModel";
import { IMediator as IMediator } from "../../Types/IMediator";
import { listDrives } from "../Drive/ListDrives";
import { ContentModel } from "../../Types/ContentModel";
import { listFolderContent } from "../Drive/ListFolderContent";

export const BackendMediator: IMediator = {
    listDrives: async (): Promise<ResponseModel<string[]>> => {
        return {
            success: true,
            model: await listDrives(),
        };
    },
    listContent: async (folder: string): Promise<ResponseModel<ContentModel[]>> => {
        return {
            success: true,
            model: await listFolderContent(folder),
        };
    }
};