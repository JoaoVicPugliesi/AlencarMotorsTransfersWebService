import validator from "../../../services/validator/validator.js";
import conclude_transfer from "./conclude_transfer.js";
async function conclude_transfer_caller(req, res) {
    const params = req.body;
    const is_valid = validator.conclude_transfer(params);
    if (is_valid.success) {
        const response = await conclude_transfer(params);
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
export default conclude_transfer_caller;
