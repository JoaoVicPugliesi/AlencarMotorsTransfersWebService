import validator from "../../../services/validator/validator.js";
import update_profile from "./update_profile.js";
async function update_profile_caller(req, res) {
    const params = req.body;
    const is_valid = validator.update_profile(params);
    if (is_valid.success) {
        const response = await update_profile(params);
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
export default update_profile_caller;
