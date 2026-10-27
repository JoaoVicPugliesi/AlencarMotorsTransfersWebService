import validator from "../../../services/validator/validator.js";
import delete_transfer from "./delete_transfer.js";
async function delete_transfer_caller(req, res) {
    const params = req.query;
    console.log(params);
    const is_valid = validator.delete_transfer(params);
    if (is_valid.success) {
        const response = await delete_transfer(params);
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
export default delete_transfer_caller;
