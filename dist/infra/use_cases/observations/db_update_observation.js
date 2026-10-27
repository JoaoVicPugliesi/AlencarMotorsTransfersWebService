import db from "../../db.js";
async function db_update_observation(params) {
    return await db.update_observation(params);
}
export default db_update_observation;
