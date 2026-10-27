import z from "zod";
import zod_validation_handler from "../../helpers/zod_validation_handler.js";
function zod_conclude_transfer(params, zod = z) {
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
