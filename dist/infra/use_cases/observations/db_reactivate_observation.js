import db from "../../db.js";
async function db_reactivate_observation(params) {
    return await db.reactivate_observation(params);
}
export default db_reactivate_observation;
