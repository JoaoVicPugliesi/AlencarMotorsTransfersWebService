import db from "../../db.js";
async function db_get_user(params) {
    return await db.get_user(params);
}
export default db_get_user;
