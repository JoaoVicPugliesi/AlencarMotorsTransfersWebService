import Observation from "../../../../domain/entitities/observation/Observation.js";

interface Update_Observation_DTO_Request extends Pick<Observation, 'id' | 'title' | 'description'> {}

interface Update_Observation_DTO_Response {
    status: number,
    json: {
        message: string,
        observation: Observation | null
    }
}

export { Update_Observation_DTO_Request, Update_Observation_DTO_Response }