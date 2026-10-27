import db_channel_user_notifications from "../../../../infra/use_cases/notifications/db_channel_user_notifications.js";
async function channel_user_notifications(params, on_notification) {
    const channel = await db_channel_user_notifications(params, on_notification);
    if (!channel)
        return null;
    return channel;
}
export default channel_user_notifications;
