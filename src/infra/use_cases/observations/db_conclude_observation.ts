import { Conclude_Observation_DTO_Request } from "../../../application/use_cases/observations/conclude_observation/conclude_observation_DTO.js";
import Observation from "../../../domain/entitities/observation/Observation.js";
import db from "../../db.js";

async function db_conclude_observation (params: Conclude_Observation_DTO_Request) {
    return await db.conclude_observation<Observation>(params);
}

export default db_conclude_observation;