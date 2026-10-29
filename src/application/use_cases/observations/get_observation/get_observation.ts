import Observation from "../../../../domain/entitities/observation/Observation.js";
import db_get_observation from "../../../../infra/use_cases/observations/db_get_observation.js";
import cache from "../../../services/cache/cache.js";
import { Get_Observation_DTO_Request, Get_Observation_DTO_Response } from "./get_observation_DTO.js";

async function get_observation (params: Get_Observation_DTO_Request): Promise<Get_Observation_DTO_Response> {
    const cache_key: string = `observation-${params.id}`;
    const cached_observation = await cache.get<Observation>(cache_key);
    if (cached_observation) {
        return {
            status: 200,
            json: { 
                message: 'Observação encontrada (Cache)', 
                observation: cached_observation 
            }
        };
    }
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
    await cache.set(cache_key, payload, 60 * 5)
    return {
        status: status,
        json: {
            message: message,
            observation: payload
        }
    }
}

export default get_observation;