import z from "zod";
import zod_validation_handler from "../../helpers/zod_validation_handler.js";
import { Conclude_Transfer_DTO_Request } from "../../../../../../../application/use_cases/transfers/conclude_transfer/conclude_transfer_DTO.js";

function zod_conclude_transfer(
    params: Conclude_Transfer_DTO_Request,
    zod = z
) {
    const schema = zod.object({
        id: zod.string().nonempty(),
        final_date: zod.iso.datetime({
            local: true,
            error: "A data de término deve ser um timestamp válido"
        }),
        username: zod.string().nonempty(),
        password: zod.string().nonempty()
    });
    const is_valid = schema.safeParse(params);
    return zod_validation_handler(is_valid);
}

export default zod_conclude_transfer;