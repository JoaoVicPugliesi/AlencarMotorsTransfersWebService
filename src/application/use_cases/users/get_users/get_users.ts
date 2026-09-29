import User from "../../../../domain/entitities/user/User.js";
import DB_Response from "../../../../domain/services/db/parts/DB_Response.js";
import db from "../../../../infra/db.js";
import { Get_Users_DTO_Request, Get_Users_DTO_Response } from "./get_users_DTO.js";

async function get_users(params: Get_Users_DTO_Request): Promise<Get_Users_DTO_Response> {
    const is_user: DB_Response<User> = await db.get_user<User>({
        username: params.username
    });

    if (is_user.status === 404 || !is_user.payload || Array.isArray(is_user.payload)) {
        return {
            status: is_user.status,
            json: {
                message: is_user.message,
                users: null
            }
        }
    }

    const { role } = is_user.payload;

    if (role !== 'admin') {
        return {
            status: 403,
            json: {
                message: 'Sem autorização',
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