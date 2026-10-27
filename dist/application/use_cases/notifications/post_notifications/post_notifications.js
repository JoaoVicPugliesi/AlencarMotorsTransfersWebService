import db_post_notifications from "../../../../infra/use_cases/notifications/db_post_notifications.js";
async function post_notifications(params) {
    const { status, message, payload } = await db_post_notifications(params);
    if (status !== 201 || !payload || Array.isArray(payload)) {
        return {
            status: status,
            json: {
                message: message,
                notification: null
            }
        };
    }
    return {
        status: status,
        json: {
            message: message,
            notification: payload
        }
    };
}
export default post_notifications;
