import validator from "../../../services/validator/validator.js";
import login from "./login.js";
async function login_caller(req, res) {
    const params = req.body;
    const is_valid = validator.login(params);
    if (is_valid.success) {
        const response = await login(params);
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
export default login_caller;
