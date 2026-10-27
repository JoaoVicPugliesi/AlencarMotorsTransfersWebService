import db_get_users from "../../../../infra/use_cases/users/db_get_users.js";
import is_authorized from "../../../helpers/is_authorized/is_authorized.js";
async function get_users(params) {
    const is_auth = await is_authorized(params.username);
    if (!is_auth.is_authorized) {
        return {
            status: is_auth.status,
            json: {
                message: is_auth.message,
                users: null
            }
        };
    }
    const users = await db_get_users();
    const { status, message, payload } = users;
    if (status !== 200 || !payload || !Array.isArray(payload)) {
        return {
            status: status,
            json: {
                message: message,
                users: null
            }
        };
    }
    let no_password_users = [];
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
    };
}
export default get_users;
