import db from "../../db.js";
async function db_get_observation(params) {
    return await db.get_observation(params);
}
export default db_get_observation;
