import User from "../../../domain/entitities/user/User.js";
import DB_Response from "../../../domain/services/db/parts/DB_Response.js";
import db from "../../../infra/db.js";
import Is_Authorized_Response from "./is_authorized_response.js";

async function is_authorized (username: string): Promise<Is_Authorized_Response> {
    
    const is_user: DB_Response<User> = await db.get_user<User>({
        username: username
    });
    if (is_user.status === 404 || !is_user.payload || Array.isArray(is_user.payload)) {
        return {
            is_authorized: false,
            status: 401,
            message: 'Usuário não existe ou não está autenticado'
        }
    };
    const { role } = is_user.payload;
    if (role !== 'admin') {
        return {
            is_authorized: false,
            status: 403,
            message: 'Não autorizado'
        }
    };
    return {
        is_authorized: true,
        status: 200,
        message: 'Autorizado'
    };
}

export default is_authorized;