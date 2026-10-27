import db from "../../db.js";
async function db_get_observations(params) {
    return await db.get_observations(params);
}
export default db_get_observations;
