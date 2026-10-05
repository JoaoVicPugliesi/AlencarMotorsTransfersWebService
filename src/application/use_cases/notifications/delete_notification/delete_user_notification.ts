import db_delete_user_notification from "../../../../infra/use_cases/notifications/db_delete_user_notification.js";
import { Delete_User_Notification_DTO_Request, Delete_User_Notification_DTO_Response } from "./delete_user_notification_DTO.js";

async function delete_user_notification (params: Delete_User_Notification_DTO_Request): Promise<Delete_User_Notification_DTO_Response> {
    const { status, message } = await db_delete_user_notification(params);

    if(status !== 200) {
        return {
            status: status,
            json: {
                message: message,
            }
        }
    }
    return {
        status: status,
        json: {
            message: message,
        }
    }
}

export default delete_user_notification;