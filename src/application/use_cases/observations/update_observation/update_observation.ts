import db_update_observation from "../../../../infra/use_cases/observations/db_update_observation.js";
import { Update_Observation_DTO_Request, Update_Observation_DTO_Response } from "./update_observation_DTO.js";

async function update_observation (params: Update_Observation_DTO_Request): Promise<Update_Observation_DTO_Response> {
    const { status: up_status, message: up_message, payload: up_payload} = await db_update_observation(params);

    if(up_status !== 200 || !up_payload || Array.isArray(up_payload)) {
        return {
            status: up_status,
            json: {
                message: up_message,
                observation: null
            }
        }
    }

    return {
        status: up_status,
        json: {
            message: up_message,
            observation: up_payload
        }
    }
}

export default update_observation;