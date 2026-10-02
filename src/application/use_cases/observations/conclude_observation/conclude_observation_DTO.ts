import Observation from "../../../../domain/entitities/observation/Observation.js";

interface Conclude_Observation_DTO_Request extends Pick<Observation, 'id' | 'final_date'> {
    username: string,
    password: string
}

interface Conclude_Observation_DTO_Response {
    status: number,
    json: {
        message: string,
        observation: Observation | null
    }
}

export { Conclude_Observation_DTO_Request, Conclude_Observation_DTO_Response };