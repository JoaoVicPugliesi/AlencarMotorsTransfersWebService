import z from "zod";
import zod_validation_handler from "../../helpers/zod_validation_handler.js";
import { Delete_Transfer_DTO_Request } from "../../../../../../../application/use_cases/transfers/delete_transfer/delete_transfer_DTO.js";

function zod_delete_transfer(
    params: Delete_Transfer_DTO_Request,
    zod = z
) {
    const schema = zod.object({
        username: z.string().nonempty(),
        password: z.string().nonempty(),
        transfer_id: z.string().nonempty()
    });
    const is_valid = schema.safeParse(params);
    return zod_validation_handler(is_valid);
}

export default zod_delete_transfer;