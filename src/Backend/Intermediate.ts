import { IIntermediate, ResponseModel } from "../Typings";

export class IntermediateBack implements IIntermediate {
    public async succes(param1: string, param2: number): Promise<ResponseModel<string>> {
        // Do the needful
        const m = `${param1}_${param2}`;

        return {
            success: true,
            model: m,
        };
    }
}

export const Intermediate = new IntermediateBack();