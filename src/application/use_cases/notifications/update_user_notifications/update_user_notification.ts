import db_update_user_notifications from "../../../../infra/use_cases/notifications/db_update_user_notification.js";
import { Update_User_Notification_DTO_Request, Update_User_Notification_DTO_Response } from "./update_user_notification_DTO.js";

async function update_user_notification (params: Update_User_Notification_DTO_Request): Promise<Update_User_Notification_DTO_Response> {
    const { status: up_status, message: up_message, payload: up_payload} = await db_update_user_notifications(params);

    if(up_status !== 200 || !up_payload || Array.isArray(up_payload)) {
        return {
            status: up_status,
            json: {
                message: up_message,
            }
        }
    }

    return {
        status: up_status,
        json: {
            message: up_message,
        }
    }
}

export default update_user_notification;