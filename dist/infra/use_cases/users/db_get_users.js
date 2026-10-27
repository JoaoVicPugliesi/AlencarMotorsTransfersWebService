import db from "../../db.js";
async function db_get_users() {
    return await db.get_users();
}
export default db_get_users;
