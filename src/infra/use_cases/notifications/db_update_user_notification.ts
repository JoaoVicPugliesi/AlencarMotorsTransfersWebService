import { Update_User_Notification_DTO_Request } from "../../../application/use_cases/notifications/update_user_notifications/update_user_notification_DTO.js";
import User_Notifications from "../../../domain/entitities/notification/User_Notifications.js";
import db from "../../db.js";

async function db_update_user_notifications (params: Update_User_Notification_DTO_Request) {
    return await db.update_user_notification<User_Notifications>(params);
}

export default db_update_user_notifications;