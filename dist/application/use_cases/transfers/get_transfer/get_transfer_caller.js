import validator from "../../../services/validator/validator.js";
import get_transfer from "./get_transfer.js";
async function get_transfer_caller(req, res) {
    const params = req.query;
    const is_valid = validator.get_transfer(params);
    if (is_valid.success) {
        const response = await get_transfer(params);
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
export default get_transfer_caller;
