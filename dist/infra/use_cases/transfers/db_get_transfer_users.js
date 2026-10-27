import db from "../../db.js";
async function db_get_transfer_users(params) {
    return await db.get_transfer_users(params);
}
export default db_get_transfer_users;
