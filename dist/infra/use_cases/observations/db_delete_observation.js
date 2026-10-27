import db from "../../db.js";
async function db_delete_observation(params) {
    return await db.delete_observation(params);
}
export default db_delete_observation;
