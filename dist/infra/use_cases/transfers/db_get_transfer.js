import db from "../../db.js";
async function db_get_transfer(params) {
    return await db.get_transfer(params);
}
export default db_get_transfer;
