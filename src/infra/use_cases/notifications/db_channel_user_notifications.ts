import { Channel_User_Notifications_DTO_Request } from "../../../application/use_cases/notifications/channel_user_notifications/channel_user_notifications_DTO.js";
import db from "../../db.js";

async function db_channel_user_notifications (params: Channel_User_Notifications_DTO_Request,  on_notification: (notification: unknown) => void) {
    return await db.channel_user_notifications(params, on_notification);
}

export default db_channel_user_notifications;