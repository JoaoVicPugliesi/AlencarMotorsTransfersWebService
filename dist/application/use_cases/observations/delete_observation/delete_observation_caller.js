import validator from "../../../services/validator/validator.js";
import delete_observation from "./delete_observation.js";
async function delete_observation_caller(req, res) {
    const params = req.query;
    const is_valid = validator.delete_observation(params);
    if (is_valid.success) {
        const response = await delete_observation(params);
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
export default delete_observation_caller;
