import db_post_user_notifications from "../../../../infra/use_cases/notifications/db_post_user_notifications.js";
import { Post_User_Notifications_DTO_Request, Post_User_Notifications_DTO_Response } from "./post_user_notifications_DTO.js";

async function post_user_notifications (params: Post_User_Notifications_DTO_Request): Promise<Post_User_Notifications_DTO_Response> {
    const response = await db_post_user_notifications(params);
    if(!response) {
        return {
            status: 500,
            json: {
                message: 'Erro ao postar notificação'
            }
        }
    }

    return { 
        status: 201,
        json: {
            message: 'Sucesso ao postar notificação'
        }
    }
}

export default post_user_notifications;