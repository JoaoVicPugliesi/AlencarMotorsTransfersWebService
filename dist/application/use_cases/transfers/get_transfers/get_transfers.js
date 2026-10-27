import db_get_user_transfers from "../../../../infra/use_cases/transfers/db_get_user_transfers.js";
import db_get_transfers from "../../../../infra/use_cases/transfers/db_get_transfers.js";
async function get_transfers(params) {
    const transfer_users = await db_get_user_transfers({
        id: params.id
    });
    const { status: t_u_status, message: t_u_message, payload: t_u_payload } = transfer_users;
    if (!t_u_payload || !Array.isArray(t_u_payload)) {
        return {
            status: t_u_status,
            json: {
                message: t_u_message,
                transfers: null
            }
        };
    }
    let transfers_id = [];
    t_u_payload.forEach((e) => {
        transfers_id.push(e.transfer_id);
    });
    const transfers = await db_get_transfers({
        transfers_id: transfers_id
    });
    const { status: t_status, message: t_message, payload: t_payload } = transfers;
    if (!t_status || !Array.isArray(t_payload)) {
        return {
            status: t_status,
            json: {
                message: t_message,
                transfers: null
            }
        };
    }
    return {
        status: t_status,
        json: {
            message: t_message,
            transfers: t_payload
        }
    };
}
export default get_transfers;
