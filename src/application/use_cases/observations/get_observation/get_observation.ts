import db_get_observation from "../../../../infra/use_cases/observations/db_get_observation.js";
import { Get_Observation_DTO_Request, Get_Observation_DTO_Response } from "./get_observation_DTO.js";

async function get_observation (params: Get_Observation_DTO_Request): Promise<Get_Observation_DTO_Response> {
     const observation = await db_get_observation({
        id: params.id
    });

    const { status, message, payload } = observation;

    if(status !== 200 || !payload || Array.isArray(payload)) {
        return {
            status: status,
            json: {
                message: message,
                observation: null
            }
        }
    }

    return {
        status: status,
        json: {
            message: message,
            observation: payload
        }
    }
}

export default get_observation;