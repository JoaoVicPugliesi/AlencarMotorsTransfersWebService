import z from "zod";
import zod_validation_handler from "../../helpers/zod_validation_handler.js";
function zod_update_user_notification(params, zod = z) {
    const schema = zod.object({
        user_id: zod.string().nonempty(),
        notification_id: zod.string().nonempty(),
        viewed_at: zod.iso.datetime({
            local: true,
            error: "A data de término deve ser um timestamp válido"
        }),
    });
    const is_valid = schema.safeParse(params);
    return zod_validation_handler(is_valid);
}
export default zod_update_user_notification;
