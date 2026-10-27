import db from "../../db.js";
async function db_update_transfer(params) {
    return await db.update_transfer(params);
}
export default db_update_transfer;
