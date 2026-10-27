import validator from "../../../services/validator/validator.js";
import delete_user_notification from "./delete_user_notification.js";
async function delete_user_notification_caller(req, res) {
    const params = req.query;
    const is_valid = validator.delete_user_notification(params);
    if (is_valid.success) {
        const response = await delete_user_notification(params);
        res.status(response.status);
        res.json(response.json);
        return;
    }
    const { list } = is_valid.error;
    res.status(422),
        res.json({
            message: list[0].errors[0].message,
            customers: null
        });
    return;
}
export default delete_user_notification_caller;
