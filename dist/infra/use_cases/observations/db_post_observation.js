import db from "../../db.js";
async function db_post_observation(params) {
    return await db.post_observation(params);
}
export default db_post_observation;
