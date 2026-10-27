import db from "../../db.js";
async function db_delete_user_notification(params) {
    return await db.delete_user_notification(params);
}
export default db_delete_user_notification;
