import Channel from "../../../../domain/services/db/parts/Channel.js";
import db_channel_user_notifications from "../../../../infra/use_cases/notifications/db_channel_user_notifications.js";
import {
    Channel_User_Notifications_DTO_Request
} from "./channel_user_notifications_DTO.js";

async function channel_user_notifications(
    params: Channel_User_Notifications_DTO_Request,
    on_notification: (notification: unknown) => void
) {
    const channel: Channel | null = await db_channel_user_notifications (
        params,
        on_notification
    );

    if(!channel) return null;
    return channel;
}

export default channel_user_notifications;