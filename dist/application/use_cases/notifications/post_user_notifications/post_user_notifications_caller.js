import post_user_notifications from "./post_user_notifications.js";
import validator from "../../../services/validator/validator.js";
async function post_user_notifications_caller(req, res) {
    const params = req.body;
    const is_valid = validator.post_user_notifications(params);
    if (is_valid.success) {
        const response = await post_user_notifications(params);
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
export default post_user_notifications_caller;
