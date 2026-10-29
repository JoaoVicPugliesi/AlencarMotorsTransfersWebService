import Observation from "../../../../domain/entitities/observation/Observation.js";
import DB_Response from "../../../../domain/services/db/parts/DB_Response.js";
import db_get_observations from "../../../../infra/use_cases/observations/db_get_observations.js";
import cache from "../../../services/cache/cache.js";
import { Get_Observations_DTO_Request, Get_Observations_DTO_Response } from "./get_observations_DTO.js";

async function get_observations (params: Get_Observations_DTO_Request): Promise<Get_Observations_DTO_Response> {
    const cache_key = `observations-${params.id}`;
    const cached_observations: Observation[] | null = await cache.get<Observation[]>(cache_key);
    if(cached_observations) {
        return {
            status: 200,
            json: {
                message: 'Observações encontradas (cache)',
                observations: cached_observations
            }
        }
    }
    const observations: DB_Response<Observation> = await db_get_observations(params);
    const { status, message, payload } = observations;
    if(status !== 200 || !payload || !Array.isArray(payload)) {
        return {
            status: status,
            json: {
                message: message,
                observations: null
            }
        }
    }
    await cache.set(cache_key, payload, 60 * 5);
    return {
        status: status,
        json: {
            message: message,
            observations: payload
        }
    }
}

export default get_observations;