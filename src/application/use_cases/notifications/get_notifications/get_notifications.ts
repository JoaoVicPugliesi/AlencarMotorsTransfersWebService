import Formatted_Notification from "../../../../domain/entitities/notification/Formatted_Notification.js";
import Transfer from "../../../../domain/entitities/transfer/Transfer.js";
import db_get_notifications from "../../../../infra/use_cases/notifications/db_get_notifications.js";
import cache from "../../../services/cache/cache.js";
import { Get_Notifications_DTO_Request, Get_Notifications_DTO_Response } from "./get_notifications_DTO.js";

async function get_notifications(params: Get_Notifications_DTO_Request): Promise<Get_Notifications_DTO_Response> {
    const cache_key = `notifications-${params.user_id}`;
    if (!params.unique && !params.notification_id) {
        const cached_notifications: Formatted_Notification[] | null = await cache.get<Formatted_Notification[]>(cache_key);
        if (cached_notifications) {
            return {
                status: 200,
                json: {
                    message: 'Transferências encontradas (cache)',
                    notifications: cached_notifications
                }
            }
        }
    }
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
    if (!params.unique && !params.notification_id) {
        await cache.set(cache_key, response, 30);
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