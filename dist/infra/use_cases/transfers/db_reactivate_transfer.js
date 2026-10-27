import db from "../../db.js";
async function db_reactivate_transfer(params) {
    return await db.reactivate_transfer(params);
}
export default db_reactivate_transfer;
