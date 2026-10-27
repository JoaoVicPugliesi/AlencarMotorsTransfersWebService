import db from "../../db.js";
async function db_delete_transfer(params) {
    return await db.delete_transfer(params);
}
export default db_delete_transfer;
