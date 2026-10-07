import db_delayed_notifications from "../../../../infra/use_cases/notifications/db_delayed_notification.js";
import { Delayed_Notification_DTO_Request, Delayed_Notification_DTO_Response } from "./delayed_notification_DTO.js";

async function delayed_notification (params: Delayed_Notification_DTO_Request): Promise<Delayed_Notification_DTO_Response> {
    const { status: up_status, message: up_message, payload: up_payload} = await db_delayed_notifications(params);

    if(up_status !== 200 || !up_payload || Array.isArray(up_payload)) {
        return {
            status: up_status,
            json: {
                message: up_message,
                payload: null
            }
        }
    }

    return {
        status: up_status,
        json: {
            message: up_message,
            payload: up_payload
        }
    }
}

export default delayed_notification;