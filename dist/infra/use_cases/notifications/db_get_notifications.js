import db from "../../db.js";
async function db_get_notifications(params) {
    return await db.get_notifications(params);
}
export default db_get_notifications;
