import db_get_notifications from "../../../../infra/use_cases/notifications/db_get_notifications.js";
async function get_notifications(params) {
    const response = await db_get_notifications(params);
    if (!response) {
        return {
            status: 500,
            json: {
                message: 'Erro',
                notifications: null
            }
        };
    }
    return {
        status: 200,
        json: {
            message: 'Sucesso',
            notifications: response
        }
    };
}
export default get_notifications;
