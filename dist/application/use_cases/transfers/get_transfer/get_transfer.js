import db_get_transfer from "../../../../infra/use_cases/transfers/db_get_transfer.js";
async function get_transfer(params) {
    const transfer = await db_get_transfer({
        id: params.id
    });
    const { status, message, payload } = transfer;
    if (status !== 200 || !payload || Array.isArray(payload)) {
        return {
            status: status,
            json: {
                message: message,
                transfer: null
            }
        };
    }
    return {
        status: status,
        json: {
            message: message,
            transfer: payload
        }
    };
}
export default get_transfer;
