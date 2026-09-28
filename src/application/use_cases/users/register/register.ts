import User from "../../../../domain/entitities/user/User.js";
import DB_Response from "../../../../domain/services/db/parts/DB_Response.js";
import Hash_Error_Response from "../../../../domain/services/hash/parts/Hash_Error_Response.js";
import db from "../../../../infra/db.js";
import hash from "../../../services/hash/hash.js";
import { Register_DTO_Request, Register_DTO_Response } from "./register_DTO.js";

async function register (params: Register_DTO_Request): Promise<Register_DTO_Response> {
    const is_user_already: DB_Response<User> = await db.get_user<User>({
        username: params.username
    });
    if(is_user_already.status !== 404) {
        return {
            status: 409,
            json: {
                message: 'Usuário já existe',
                user: null
            }
        }
    }
    const hashed_password: string | Hash_Error_Response = await hash.hash_password({
        password: params.password
    });
    console.log(hashed_password);
    if(typeof(hashed_password) !== 'string') {
        return {
            status: hashed_password.status,
            json: {
                message: hashed_password.message,
                user: null
            }
        }
    }
    const response: DB_Response<User> = await db.register<User>({
        ...params,
        password: hashed_password
    });
    if(response.status !== 201) {
        return {
            status: response.status,
            json: {
                message: response.message,
                user: null
            }
        }
    }

    return {
        status: response.status,
        json: {
            message: response.message,
            user: response.payload
        }
    }
}

export default register;