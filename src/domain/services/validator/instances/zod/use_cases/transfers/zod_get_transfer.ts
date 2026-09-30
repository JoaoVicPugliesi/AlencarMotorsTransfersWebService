import z from "zod";
import zod_validation_handler from "../../helpers/zod_validation_handler.js";
import { Get_Transfer_DTO_Request } from "../../../../../../../application/use_cases/transfers/get_transfer/get_transfer_DTO.js";

function zod_get_transfer(
    params: Get_Transfer_DTO_Request,
    zod = z
) {
    const schema = zod.object({
        id: z.string().nonempty()
    });
    const is_valid = schema.safeParse(params);
    return zod_validation_handler(is_valid);
}

export default zod_get_transfer;