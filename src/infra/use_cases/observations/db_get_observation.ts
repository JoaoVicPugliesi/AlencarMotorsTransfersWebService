import { Get_Observation_DTO_Request } from "../../../application/use_cases/observations/get_observation/get_observation_DTO.js";
import Observation from "../../../domain/entitities/observation/Observation.js";
import db from "../../db.js";

async function db_get_observation(params: Get_Observation_DTO_Request) {
    return await db.get_observation<Observation>(params);
}

export default db_get_observation;