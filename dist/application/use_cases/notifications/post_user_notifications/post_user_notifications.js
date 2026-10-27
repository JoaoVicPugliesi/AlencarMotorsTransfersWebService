import db_post_user_notifications from "../../../../infra/use_cases/notifications/db_post_user_notifications.js";
async function post_user_notifications(params) {
    const { status, message, payload } = await db_post_user_notifications(params);
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
export default post_user_notifications;
