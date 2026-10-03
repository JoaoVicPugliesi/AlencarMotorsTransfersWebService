import { Post_User_Notifications_DTO_Request } from "../../../application/use_cases/notifications/post_user_notifications/post_user_notifications_DTO.js";
import User_Notifications from "../../../domain/entitities/notification/User_Notifications.js";
import db from "../../db.js";

async function db_post_user_notifications (params: Post_User_Notifications_DTO_Request) {
    return await db.post_user_notifications<User_Notifications>(params);
}

export default db_post_user_notifications;