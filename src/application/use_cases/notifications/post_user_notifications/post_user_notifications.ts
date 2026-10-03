import User_Notifications from "../../../../domain/entitities/notification/User_Notifications.js";
import DB_Response from "../../../../domain/services/db/parts/DB_Response.js";
import db_post_user_notifications from "../../../../infra/use_cases/notifications/db_post_user_notifications.js";
import { Post_User_Notifications_DTO_Request, Post_User_Notifications_DTO_Response } from "./post_user_notifications_DTO.js";

async function post_user_notifications (params: Post_User_Notifications_DTO_Request): Promise<Post_User_Notifications_DTO_Response> {
    const { status, message, payload }: DB_Response<User_Notifications> = await db_post_user_notifications(params);
    if(status !== 201) {
        return {
            status: status,
            json: {
                message: message
            }
        }
    }

    return { 
        status: status,
        json: {
            message: message
        }
    }
}

export default post_user_notifications;