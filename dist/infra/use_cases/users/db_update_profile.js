import db from "../../db.js";
async function db_update_profile(params) {
    return await db.update_profile(params);
}
export default db_update_profile;
