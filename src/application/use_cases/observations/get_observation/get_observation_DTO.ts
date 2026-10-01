import Observation from "../../../../domain/entitities/observation/Observation.js";

interface Get_Observation_DTO_Request extends Pick<Observation, 'id'> {}

interface Get_Observation_DTO_Response {
    status: number,
    json: {
        message: string,
        observation: Observation | null
    }
}

export { Get_Observation_DTO_Request, Get_Observation_DTO_Response };