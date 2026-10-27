import db_post_transfer_users from "../../../../infra/use_cases/transfers/db_post_transfer_users.js";
async function post_transfer_users(params) {
    const { status, message } = await db_post_transfer_users(params);
    if (status !== 201) {
        return {
            status: status,
            json: {
                message: message
            }
        };
    }
    return {
        status: status,
        json: {
            message: message
        }
    };
}
export default post_transfer_users;
