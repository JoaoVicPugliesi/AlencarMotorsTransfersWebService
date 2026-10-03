import Notification from "../../../../domain/entitities/notification/Notification.js";
import DB_Response from "../../../../domain/services/db/parts/DB_Response.js";
import db_post_notifications from "../../../../infra/use_cases/notifications/db_post_notifications.js";
import { Post_Notifications_DTO_Request, Post_Notifications_DTO_Response } from "./post_notifications_DTO.js";

async function post_notifications (params: Post_Notifications_DTO_Request): Promise<Post_Notifications_DTO_Response> {
    const { status, message, payload }: DB_Response<Notification> = await db_post_notifications(params);
    if(status !== 201 || !payload || Array.isArray(payload)) {
        return {
            status: status,
            json: {
                message: message,
                notification: null
            }
        }
    }
    return {
        status: status,
        json: {
            message: message,
            notification: payload
        }
    }
}

export default post_notifications;