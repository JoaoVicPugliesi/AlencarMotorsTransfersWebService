import db from "../../db.js";
async function db_conclude_transfer(params) {
    return await db.conclude_transfer(params);
}
export default db_conclude_transfer;
