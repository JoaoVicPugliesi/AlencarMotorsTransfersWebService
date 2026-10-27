import db_delete_observation from "../../../../infra/use_cases/observations/db_delete_observation.js";
import db_get_user from "../../../../infra/use_cases/users/db_get_user.js";
import hash from "../../../services/hash/hash.js";
async function delete_observation(params) {
    const { status: u_status, message: u_message, payload: u_payload } = await db_get_user({
        username: params.username
    });
    if (u_status !== 200 || !u_payload || Array.isArray(u_payload)) {
        return {
            status: u_status,
            json: {
                message: u_message
            }
        };
    }
    const verified_password = await hash.verify_password({
        hash: u_payload.password,
        password: params.password
    });
    if (typeof verified_password !== 'boolean') {
        return {
            status: verified_password.status,
            json: {
                message: verified_password.message,
            }
        };
    }
    if (!verified_password) {
        return {
            status: 401,
            json: {
                message: 'Senha incorreta',
            }
        };
    }
    const { status: ob_status, message: ob_message } = await db_delete_observation({
        observation_id: params.observation_id
    });
    if (ob_status !== 200) {
        return {
            status: ob_status,
            json: {
                message: ob_message
            }
        };
    }
    return {
        status: ob_status,
        json: {
            message: ob_message
        }
    };
}
export default delete_observation;
