import validator from "../../../services/validator/validator.js";
import reactivate_observation from "./reactivate_observation.js";
async function reactivate_observation_caller(req, res) {
    const params = req.body;
    const is_valid = validator.reactivate_transfer(params);
    if (is_valid.success) {
        const response = await reactivate_observation(params);
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
export default reactivate_observation_caller;
