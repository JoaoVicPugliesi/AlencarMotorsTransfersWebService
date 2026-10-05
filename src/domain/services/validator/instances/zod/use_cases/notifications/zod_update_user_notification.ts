import z from "zod";
import zod_validation_handler from "../../helpers/zod_validation_handler.js";
import { Update_User_Notification_DTO_Request } from "../../../../../../../application/use_cases/notifications/update_user_notifications/update_user_notification_DTO.js";

function zod_update_user_notification(
    params: Update_User_Notification_DTO_Request,
    zod = z
) {
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