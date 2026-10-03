import Formatted_Notification from "../../../../domain/entitities/notification/Formatted_Notification.js";
import db_get_notifications from "../../../../infra/use_cases/notifications/db_get_notifications.js";
import { Get_Notifications_DTO_Request, Get_Notifications_DTO_Response } from "./get_notifications_DTO.js";

async function get_notifications(params: Get_Notifications_DTO_Request): Promise<Get_Notifications_DTO_Response> {
    const response: Formatted_Notification[] | Formatted_Notification | null = await db_get_notifications(params);
    if (!response) {
        return {
            status: 500,
            json: {
                message: 'Erro',
                notifications: null
            }
        }
    }
    return {
        status: 200,
        json: {
            message: 'Sucesso',
            notifications: response
        }
    }
}

export default get_notifications;