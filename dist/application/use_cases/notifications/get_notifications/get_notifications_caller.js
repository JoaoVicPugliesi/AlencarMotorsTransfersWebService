import get_notifications from "./get_notifications.js";
async function get_notifications_caller(req, res) {
    const params = req.query;
    if (params.notification_id === 'null')
        params.notification_id = null;
    if (params.unique === 'true')
        params.unique = true;
    if (params.unique === 'false')
        params.unique = false;
    const { status, json } = await get_notifications(params);
    res.status(status);
    res.json(json);
}
export default get_notifications_caller;
