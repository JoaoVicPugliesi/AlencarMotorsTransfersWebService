import validator from "../../../services/validator/validator.js";
import conclude_observation from "./conclude_observation.js";
async function conclude_observation_caller(req, res) {
    const params = req.body;
    const is_valid = validator.conclude_observation(params);
    if (is_valid.success) {
        const response = await conclude_observation(params);
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
export default conclude_observation_caller;
