import { Post_Observation_DTO_Request } from "../../../application/use_cases/observations/post_observation/post_observation_DTO.js";
import Observation from "../../../domain/entitities/observation/Observation.js";
import db from "../../db.js";

async function db_post_observation(params: Post_Observation_DTO_Request) {
    return await db.post_observation<Observation>(params);
}

export default db_post_observation;