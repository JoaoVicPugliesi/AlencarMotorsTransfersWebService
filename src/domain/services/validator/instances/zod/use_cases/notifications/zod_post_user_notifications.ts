import z from "zod";
import zod_validation_handler from "../../helpers/zod_validation_handler.js";
import { Post_User_Notifications_DTO_Request } from "../../../../../../../application/use_cases/notifications/post_user_notifications/post_user_notifications_DTO.js";

function zod_post_user_notifications(
    params: Post_User_Notifications_DTO_Request,
    zod = z
) {
    const schema = zod.object({
       user_id: zod.string().nonempty(),
       notification_id: zod.string().nonempty(),
       notified_at: zod.iso.datetime({
            local: true,
            error: "A data de término deve ser um timestamp válido"
        }),
    });
    const is_valid = schema.safeParse(params);
    return zod_validation_handler(is_valid);
}

export default zod_post_user_notifications;