import db_reactivate_observation from "../../../../infra/use_cases/observations/db_reactivate_observation.js";
import db_get_user from "../../../../infra/use_cases/users/db_get_user.js";
import hash from "../../../services/hash/hash.js";
async function reactivate_observation(params) {
    console.log(params);
    const { status: u_status, message: u_message, payload: u_payload } = await db_get_user({
        username: params.username
    });
    if (u_status !== 200 || !u_payload || Array.isArray(u_payload)) {
        return {
            status: u_status,
            json: {
                message: u_message,
                observation: null
            }
        };
    }
    console.log(u_payload);
    const verified_password = await hash.verify_password({
        hash: u_payload.password,
        password: params.password
    });
    if (typeof verified_password !== 'boolean') {
        return {
            status: verified_password.status,
            json: {
                message: verified_password.message,
                observation: null
            }
        };
    }
    if (!verified_password) {
        return {
            status: 401,
            json: {
                message: 'Senha incorreta',
                observation: null
            }
        };
    }
    const reactivated = await db_reactivate_observation(params);
    const { status: c_status, message: c_message, payload: c_payload } = reactivated;
    if (c_status !== 200 || !c_payload || Array.isArray(c_payload)) {
        return {
            status: c_status,
            json: {
                message: c_message,
                observation: null
            }
        };
    }
    return {
        status: c_status,
        json: {
            message: c_message,
            observation: c_payload
        }
    };
}
export default reactivate_observation;
