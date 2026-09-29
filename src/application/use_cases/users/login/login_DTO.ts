import User from "../../../../domain/entitities/user/User.js";

interface Login_DTO_Request extends Pick<User, 'username' | 'password'> {}

interface Login_DTO_Response {
    status: number,
    json: {
        message: string,
        user: Omit<User, 'password'> | null
    }
}

export { Login_DTO_Request, Login_DTO_Response }