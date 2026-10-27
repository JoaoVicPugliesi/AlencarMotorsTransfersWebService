import z from "zod";
import zod_validation_handler from "../../helpers/zod_validation_handler.js";
function zod_delete_user_notification(params, zod = z) {
    const schema = zod.object({
        user_id: zod.string(),
        notification_id: zod.string()
    });
    const is_valid = schema.safeParse(params);
    return zod_validation_handler(is_valid);
}
export default zod_delete_user_notification;
