import z from "zod";
import zod_validation_handler from "../../helpers/zod_validation_handler.js";
function zod_reactivate_observation(params, zod = z) {
    const schema = zod.object({
        id: zod.string().nonempty(),
        term_date: zod.iso.datetime({
            local: true,
            error: "Prazo deve ser um timestamp válido"
        }),
        username: zod.string().nonempty(),
        password: zod.string().nonempty()
    });
    const is_valid = schema.safeParse(params);
    return zod_validation_handler(is_valid);
}
export default zod_reactivate_observation;
