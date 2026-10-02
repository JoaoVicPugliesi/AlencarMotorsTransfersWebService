import User from "../../../../domain/entitities/user/User.js";

interface Update_Profile_DTO_Request extends Pick <User, 'id' | 'username'> {}

interface Update_Profile_DTO_Response {
    status: number,
    json: {
        message: string,
        user: User | null
    }
}

export { Update_Profile_DTO_Request, Update_Profile_DTO_Response };