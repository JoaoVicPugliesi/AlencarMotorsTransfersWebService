import { Post_Notifications_DTO_Request } from "../../../application/use_cases/notifications/post_notifications/post_notifications_DTO.js";
import Notification from "../../../domain/entitities/notification/Notification.js";
import db from "../../db.js";

async function db_post_notifications (params: Post_Notifications_DTO_Request) {
    return await db.post_notifications<Notification>(params);
}

export default db_post_notifications;