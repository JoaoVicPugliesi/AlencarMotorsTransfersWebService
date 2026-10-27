import db from "../../db.js";
async function db_post_transfer_users(params) {
    return await db.post_transfer_users(params);
}
export default db_post_transfer_users;
