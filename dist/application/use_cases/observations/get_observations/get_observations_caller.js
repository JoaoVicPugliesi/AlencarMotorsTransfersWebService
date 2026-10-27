import validator from "../../../services/validator/validator.js";
import get_observations from "./get_observations.js";
async function get_observations_caller(req, res) {
    const params = req.query;
    const is_valid = validator.get_observations(params);
    if (is_valid.success) {
        const response = await get_observations(params);
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
export default get_observations_caller;
