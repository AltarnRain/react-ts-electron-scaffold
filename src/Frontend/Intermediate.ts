import { IIntermediate, ResponseModel } from "../Typings";
import { sendAndReceive } from "./Api";

class IntermediateFront implements IIntermediate {
    public async succes(param1: string, param2: number): Promise<ResponseModel<string>> {
        return await sendAndReceive<string>("Succes", param1, param2);
    }
}

export const Intermediate = new IntermediateFront();