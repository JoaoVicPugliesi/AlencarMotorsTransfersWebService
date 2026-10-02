import { Update_Observation_DTO_Request } from "../../../application/use_cases/observations/update_observation/update_observation_DTO.js";
import Observation from "../../../domain/entitities/observation/Observation.js";
import db from "../../db.js";

async function db_update_observation (params: Update_Observation_DTO_Request) {
    return await db.update_observation<Observation>(params);
}

export default db_update_observation;