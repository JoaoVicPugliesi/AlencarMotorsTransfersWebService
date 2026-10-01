import Observation from "../../../../domain/entitities/observation/Observation.js";
import User from "../../../../domain/entitities/user/User.js";

interface Delete_Observation_DTO_Request {
    username: string;
    password: Pick<User, 'password'>
    observation_id: Pick<Observation, 'id'>;
}

interface Delete_Observation_DTO_Response {
    status: number,
    json: {
        message: string
    }
}

export { Delete_Observation_DTO_Request, Delete_Observation_DTO_Response };