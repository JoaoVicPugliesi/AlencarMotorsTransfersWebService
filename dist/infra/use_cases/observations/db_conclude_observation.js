import db from "../../db.js";
async function db_conclude_observation(params) {
    return await db.conclude_observation(params);
}
export default db_conclude_observation;
