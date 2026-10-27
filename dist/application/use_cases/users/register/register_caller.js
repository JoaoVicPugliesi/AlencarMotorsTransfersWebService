import validator from "../../../services/validator/validator.js";
import register from "./register.js";
async function register_caller(req, res) {
    const params = req.body;
    const is_valid = validator.register(params);
    if (is_valid.success) {
        const response = await register(params);
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
export default register_caller;
