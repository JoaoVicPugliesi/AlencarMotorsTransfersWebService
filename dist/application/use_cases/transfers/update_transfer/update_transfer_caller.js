import validator from "../../../services/validator/validator.js";
import update_transfer from "./update_transfer.js";
async function update_transfer_caller(req, res) {
    const params = req.body;
    const is_valid = validator.update_transfer(params);
    if (is_valid.success) {
        const response = await update_transfer(params);
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
export default update_transfer_caller;
