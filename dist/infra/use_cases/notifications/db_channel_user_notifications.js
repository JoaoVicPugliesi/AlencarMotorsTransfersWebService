import db from "../../db.js";
async function db_channel_user_notifications(params, on_notification) {
    return await db.channel_user_notifications(params, on_notification);
}
export default db_channel_user_notifications;
