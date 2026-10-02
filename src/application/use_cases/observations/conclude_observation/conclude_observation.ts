import Observation from "../../../../domain/entitities/observation/Observation.js";
import DB_Response from "../../../../domain/services/db/parts/DB_Response.js";
import db_conclude_observation from "../../../../infra/use_cases/observations/db_conclude_observation.js";
import { Conclude_Observation_DTO_Request, Conclude_Observation_DTO_Response } from "./conclude_observation_DTO.js";

async function conclude_observation (params: Conclude_Observation_DTO_Request): Promise<Conclude_Observation_DTO_Response> {
    const concluded: DB_Response<Observation> = await db_conclude_observation(params);
    const { status: c_status, message: c_message, payload: c_payload } = concluded;
    if(c_status !== 200 || !c_payload || Array.isArray(c_payload)) {
        return {
            status: c_status,
            json: {
                message: c_message,
                observation: null
            }
        }
    }

    return {
        status: c_status,
        json: {
            message: c_message,
            observation: c_payload
        }
    }
}

export default conclude_observation;