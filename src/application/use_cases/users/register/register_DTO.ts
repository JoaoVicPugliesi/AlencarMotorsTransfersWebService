import User from "../../../../domain/entitities/user/User.js";

interface Register_DTO_Request extends Omit<User, 'id'> {
    admin_username: string
}

interface Register_DTO_Response {
    status: number,
    json: {
        message: string,
        user: Omit<User, 'password'> | null
    }
}

export { Register_DTO_Request, Register_DTO_Response }