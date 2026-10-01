import Observation from "../../../../domain/entitities/observation/Observation.js";

interface Post_Observation_DTO_Request extends Omit<Observation, 'id' | 'final_date' | 'status'> {};
interface Post_Observation_DTO_Response {
    status: number,
    json: {
        message: string
    }
}

export { Post_Observation_DTO_Request, Post_Observation_DTO_Response };