import User from "../../../../domain/entitities/user/User.js";
import DB_Response from "../../../../domain/services/db/parts/DB_Response.js";
import db_get_users from "../../../../infra/use_cases/users/db_get_users.js";
import is_authorized from "../../../helpers/is_authorized/is_authorized.js";
import Is_Authorized_Response from "../../../helpers/is_authorized/is_authorized_response.js";
import { Get_Users_DTO_Request, Get_Users_DTO_Response } from "./get_users_DTO.js";

async function get_users(params: Get_Users_DTO_Request): Promise<Get_Users_DTO_Response> {
    console.log(params);
    const is_auth: Is_Authorized_Response = await is_authorized(params.username);
    if(!is_auth.is_authorized) {
        return {
            status: is_auth.status,
            json: {
                message: is_auth.message,
                users: null
            }
        }
    }
    const users: DB_Response<User> = await db_get_users();
    const { status, message, payload } = users;
    if(status === 404 || !payload || !Array.isArray(payload)) {
        return {
            status: status,
            json: {
                message: message,
                users: null
            }
        }
    }
    let no_password_users: Omit<User, 'password'>[] = [];
    payload.forEach((p) => {
        no_password_users.push({
            id: p.id,
            username: p.username,
            role: p.role
        });
    });
    return {
        status: status,
        json: {
            message: message,
            users: no_password_users
        }
    }
}

export default get_users;