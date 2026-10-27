import db from "../../../../infra/db.js";
import hash from "../../../services/hash/hash.js";
async function login(params) {
    const user = await db.get_user({
        username: params.username
    });
    const { status, message, payload } = user;
    if (status === 400) {
        return {
            status: status,
            json: {
                message: message,
                user: null
            }
        };
    }
    if (status === 404 || !payload || Array.isArray(payload)) {
        return {
            status: 400,
            json: {
                message: 'Senha ou usuário errados',
                user: null
            }
        };
    }
    const { id, username, password, role } = payload;
    const is_password = await hash.verify_password({
        hash: password,
        password: params.password
    });
    if (typeof is_password !== 'boolean') {
        return {
            status: is_password.status,
            json: {
                message: is_password.message,
                user: null
            }
        };
    }
    if (!is_password) {
        return {
            status: 400,
            json: {
                message: 'Senha ou usuário errados',
                user: null
            }
        };
    }
    return {
        status: 200,
        json: {
            message: 'Login feito com sucesso',
            user: {
                id: id,
                username: username,
                role: role
            }
        }
    };
}
export default login;
