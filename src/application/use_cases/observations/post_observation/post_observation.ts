import Observation from "../../../../domain/entitities/observation/Observation.js";
import DB_Response from "../../../../domain/services/db/parts/DB_Response.js";
import db_post_observation from "../../../../infra/use_cases/observations/db_post_observation.js";
import { Post_Observation_DTO_Request, Post_Observation_DTO_Response } from "./post_observation_DTO.js";

async function post_observation (params: Post_Observation_DTO_Request): Promise<Post_Observation_DTO_Response> {
    const observation: DB_Response<Observation> = await db_post_observation(params);
    const { status, message } = observation;
    if(status !== 201) {
        return {
            status: status,
            json: {
                message: message
            }
        }
    }

    return {
        status: status,
        json: {
            message: message
        }
    }
}

export default post_observation;