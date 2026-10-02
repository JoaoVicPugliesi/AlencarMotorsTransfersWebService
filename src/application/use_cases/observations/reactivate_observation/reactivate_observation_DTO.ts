import Observation from "../../../../domain/entitities/observation/Observation.js";

interface Reactivate_Observation_DTO_Request extends Pick<Observation, 'id' | 'term_date'> {
    username: string,
    password: string
}

interface Reactivate_Observation_DTO_Response {
    status: number,
    json: {
        message: string,
        observation: Observation | null
    }
}

export { Reactivate_Observation_DTO_Request, Reactivate_Observation_DTO_Response };