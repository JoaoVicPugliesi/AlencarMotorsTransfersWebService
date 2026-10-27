import db from "../../db.js";
async function db_get_user_transfers(params) {
    return await db.get_user_transfers(params);
}
export default db_get_user_transfers;
