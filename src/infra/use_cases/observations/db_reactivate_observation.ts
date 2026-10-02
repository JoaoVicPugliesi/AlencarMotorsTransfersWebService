import { Reactivate_Observation_DTO_Request } from "../../../application/use_cases/observations/reactivate_observation/reactivate_observation_DTO.js";
import Observation from "../../../domain/entitities/observation/Observation.js";
import db from "../../db.js";

async function db_reactivate_observation (params: Reactivate_Observation_DTO_Request) {
    return await db.reactivate_observation<Observation>(params);
}

export default db_reactivate_observation;