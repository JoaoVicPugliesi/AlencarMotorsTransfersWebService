import z from "zod";
import zod_validation_handler from "../../helpers/zod_validation_handler.js";
function zod_post_notifications(params, zod = z) {
    const schema = zod.object({
        transfer_id: zod.string().nullable(),
        content: zod.string().nonempty(),
        generated_by: zod.string().nonempty(),
        created_at: zod.iso.datetime({
            local: true,
            error: "Deve ser um timestamp válido"
        }),
    });
    const is_valid = schema.safeParse(params);
    return zod_validation_handler(is_valid);
}
export default zod_post_notifications;
