import db_delete_transfer from "../../../../infra/use_cases/transfers/db_delete_transfer.js";
import db_get_user from "../../../../infra/use_cases/users/db_get_user.js";
import hash from "../../../services/hash/hash.js";
async function delete_transfer(params) {
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
    const { status: d_status, message: d_message } = await db_delete_transfer({
        transfer_id: params.transfer_id
    });
    console.log(d_status);
    if (d_status !== 200) {
        return {
            status: d_status,
            json: {
                message: d_message
            }
        };
    }
    return {
        status: d_status,
        json: {
            message: d_message
        }
    };
}
export default delete_transfer;
