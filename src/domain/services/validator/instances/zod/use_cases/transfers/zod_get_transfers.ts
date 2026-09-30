import z from "zod";
import zod_validation_handler from "../../helpers/zod_validation_handler.js";
import { Get_Transfers_DTO_Request } from "../../../../../../../application/use_cases/transfers/get_transfers/get_transfers_DTO.js";

function zod_get_transfers(
    params: Get_Transfers_DTO_Request,
    zod = z
) {
    const schema = zod.object({
        id: z.string().nonempty()
    });
    const is_valid = schema.safeParse(params);
    return zod_validation_handler(is_valid);
}

export default zod_get_transfers;