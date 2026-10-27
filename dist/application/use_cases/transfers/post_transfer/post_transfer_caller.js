import validator from "../../../services/validator/validator.js";
import post_transfer from "./post_transfer.js";
async function post_transfer_caller(req, res) {
    const params = req.body;
    const is_valid = validator.post_transfer(params);
    if (is_valid.success) {
        const response = await post_transfer(params);
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
export default post_transfer_caller;
