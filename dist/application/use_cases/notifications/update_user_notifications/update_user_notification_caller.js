import validator from "../../../services/validator/validator.js";
import update_user_notification from "./update_user_notification.js";
async function update_user_notification_caller(req, res) {
    const params = req.body;
    const is_valid = validator.update_user_notification(params);
    if (is_valid.success) {
        const response = await update_user_notification(params);
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
export default update_user_notification_caller;
