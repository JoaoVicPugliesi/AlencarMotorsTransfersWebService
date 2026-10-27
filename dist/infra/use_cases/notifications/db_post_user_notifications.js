import db from "../../db.js";
async function db_post_user_notifications(params) {
    return await db.post_user_notifications(params);
}
export default db_post_user_notifications;
