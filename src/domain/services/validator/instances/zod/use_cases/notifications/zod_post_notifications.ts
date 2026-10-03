import z from "zod";
import zod_validation_handler from "../../helpers/zod_validation_handler.js";
import { Post_Notifications_DTO_Request } from "../../../../../../../application/use_cases/notifications/post_notifications/post_notifications_DTO.js";

function zod_post_notifications(
    params: Post_Notifications_DTO_Request,
    zod = z
) {
    const schema = zod.object({
        transfer_id: zod.string().nonempty(),
        content: zod.string().nonempty(),
        generated_by: zod.string().nonempty(),
        created_at: zod.iso.datetime({
            local: true,
            error: "A data de término deve ser um timestamp válido"
        }),
    });
    const is_valid = schema.safeParse(params);
    return zod_validation_handler(is_valid);
}

export default zod_post_notifications;