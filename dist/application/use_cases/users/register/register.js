import db from "../../../../infra/db.js";
import is_authorized from "../../../helpers/is_authorized/is_authorized.js";
import hash from "../../../services/hash/hash.js";
async function register(params) {
    const is_auth = await is_authorized(params.admin_username);
    if (!is_auth.is_authorized) {
        return {
            status: is_auth.status,
            json: {
                message: is_auth.message,
                user: null
            }
        };
    }
    const user = await db.get_user({
        username: params.username
    });
    if (user.status === 400) {
        return {
            status: user.status,
            json: {
                message: user.message,
                user: null
            }
        };
    }
    if (user.status === 200) {
        return {
            status: 409,
            json: {
                message: 'Usuário já existe',
                user: null
            }
        };
    }
    const hashed_password = await hash.hash_password({
        password: params.password
    });
    console.log(hashed_password);
    if (typeof hashed_password !== 'string') {
        return {
            status: hashed_password.status,
            json: {
                message: hashed_password.message,
                user: null
            }
        };
    }
    const response = await db.register({
        username: params.username,
        role: params.role,
        password: hashed_password
    });
    const { status, message, payload } = response;
    if (status !== 201 || !payload || Array.isArray(payload)) {
        return {
            status: status,
            json: {
                message: message,
                user: null
            }
        };
    }
    const { id, username, role } = payload;
    return {
        status: status,
        json: {
            message: message,
            user: {
                id,
                username,
                role
            }
        }
    };
}
export default register;
