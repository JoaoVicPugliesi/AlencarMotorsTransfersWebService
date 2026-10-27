import db_update_transfer from "../../../../infra/use_cases/transfers/db_update_transfer.js";
async function update_transfer(params) {
    const { status: up_status, message: up_message, payload: up_payload } = await db_update_transfer(params);
    if (up_status !== 200 || !up_payload || Array.isArray(up_payload)) {
        return {
            status: up_status,
            json: {
                message: up_message,
                transfer: null
            }
        };
    }
    return {
        status: up_status,
        json: {
            message: up_message,
            transfer: up_payload
        }
    };
}
export default update_transfer;
