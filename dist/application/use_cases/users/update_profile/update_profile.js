import db_update_profile from "../../../../infra/use_cases/users/db_update_profile.js";
async function update_profile(params) {
    const { status: up_status, message: up_message, payload: up_payload } = await db_update_profile(params);
    if (up_status !== 200 || !up_payload || Array.isArray(up_payload)) {
        return {
            status: up_status,
            json: {
                message: up_message,
                user: null
            }
        };
    }
    return {
        status: up_status,
        json: {
            message: up_message,
            user: up_payload
        }
    };
}
export default update_profile;
