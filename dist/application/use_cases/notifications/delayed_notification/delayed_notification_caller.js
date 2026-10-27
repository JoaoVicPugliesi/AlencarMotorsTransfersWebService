import validator from "../../../services/validator/validator.js";
import delayed_notification from "./dalayed_notification.js";
async function delayed_notification_caller(req, res) {
    const params = req.body;
    const is_valid = validator.delayed_notification(params);
    if (is_valid.success) {
        const response = await delayed_notification(params);
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
export default delayed_notification_caller;
