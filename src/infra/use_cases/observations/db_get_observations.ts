import { Get_Observations_DTO_Request } from "../../../application/use_cases/observations/get_observations/get_observations_DTO.js";
import Observation from "../../../domain/entitities/observation/Observation.js";
import db from "../../db.js";

async function db_get_observations(params: Get_Observations_DTO_Request) {
    return await db.get_observations<Observation>(params);
}

export default db_get_observations;