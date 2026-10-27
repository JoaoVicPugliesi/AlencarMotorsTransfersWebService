import db from "../../db.js";
async function db_update_user_notifications(params) {
    return await db.update_user_notification(params);
}
export default db_update_user_notifications;
