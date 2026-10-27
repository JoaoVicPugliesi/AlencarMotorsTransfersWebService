import db from "../../db.js";
async function db_delayed_notifications(params) {
    return await db.delayed_notification(params);
}
export default db_delayed_notifications;
