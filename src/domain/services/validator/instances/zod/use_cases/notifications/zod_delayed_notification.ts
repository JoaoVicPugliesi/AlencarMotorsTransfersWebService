import z from "zod";
import zod_validation_handler from "../../helpers/zod_validation_handler.js";
import { Delayed_Notification_DTO_Request } from "../../../../../../../application/use_cases/notifications/delayed_notification/delayed_notification_DTO.js";

function zod_delayed_notification(
    params: Delayed_Notification_DTO_Request,
    zod = z
) {
    const schema = zod.object({
       id: zod.string().nonempty(),
       mode: zod.literal(['transfers', 'observations']).nonoptional()
    });
    const is_valid = schema.safeParse(params);
    return zod_validation_handler(is_valid);
}

export default zod_delayed_notification;