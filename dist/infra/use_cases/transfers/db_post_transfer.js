import db from "../../db.js";
async function db_post_transfer(params) {
    return await db.post_transfer(params);
}
export default db_post_transfer;
