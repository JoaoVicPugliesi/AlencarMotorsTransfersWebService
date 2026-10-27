import db_delete_user_notification from "../../../../infra/use_cases/notifications/db_delete_user_notification.js";
async function delete_user_notification(params) {
    const { status, message } = await db_delete_user_notification(params);
    if (status !== 200) {
        return {
            status: status,
            json: {
                message: message,
            }
        };
    }
    return {
        status: status,
        json: {
            message: message,
        }
    };
}
export default delete_user_notification;
