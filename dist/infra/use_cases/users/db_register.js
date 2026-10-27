import db from "../../db.js";
async function db_register(params) {
    return await db.register(params);
}
export default db_register;
