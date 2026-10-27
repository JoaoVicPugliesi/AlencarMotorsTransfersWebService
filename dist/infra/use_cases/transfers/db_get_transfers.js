import db from "../../db.js";
async function db_get_transfers(params) {
    return await db.get_transfers(params);
}
export default db_get_transfers;
