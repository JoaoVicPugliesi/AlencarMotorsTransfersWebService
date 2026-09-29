import User from "../../../../domain/entitities/user/User.js";
import DB_Response from "../../../../domain/services/db/parts/DB_Response.js";
import db from "../../../../infra/db.js";
import is_authorized from "../../../helpers/is_authorized/is_authorized.js";
import Is_Authorized_Response from "../../../helpers/is_authorized/is_authorized_response.js";
import { Get_Users_DTO_Request, Get_Users_DTO_Response } from "./get_users_DTO.js";

async function get_users(params: Get_Users_DTO_Request): Promise<Get_Users_DTO_Response> {
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
    const users: DB_Response<User> = await db.get_users();

    if(users.status === 404 || !users || !Array.isArray(users)) {
        return {
            status: users.status,
            json: {
                message: users.message,
                users: null
            }
        }
    }
    let no_password_users: Omit<User, 'password'>[] = [];
    users.forEach((u) => {
        no_password_users.push({
            id: u.id,
            username: u.username,
            role: u.role
        });
    });
    return {
        status: 200,
        json: {
            message: 'Usuários achados',
            users: no_password_users
        }
    }
}

export default get_users;