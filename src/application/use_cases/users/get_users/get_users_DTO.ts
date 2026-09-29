import User from "../../../../domain/entitities/user/User.js";

interface Get_Users_DTO_Request extends Pick<User, 'username'> {}

interface Get_Users_DTO_Response {
    status: number,
    json: {
        message: string,
        users: Omit<User, 'password'>[] | null
    }
}

export { Get_Users_DTO_Request, Get_Users_DTO_Response };