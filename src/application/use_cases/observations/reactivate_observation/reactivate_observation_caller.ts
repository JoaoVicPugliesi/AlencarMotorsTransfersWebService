import Request_Callback from "../../../../domain/services/server/parts/Request_Callback.js";
import Response_Callback from "../../../../domain/services/server/parts/Response_Callback.js";
import validator from "../../../services/validator/validator.js";
import reactivate_observation from "./reactivate_observation.js";
import { Reactivate_Observation_DTO_Request, Reactivate_Observation_DTO_Response } from "./reactivate_observation_DTO.js";

async function reactivate_observation_caller(req: Request_Callback<
    Reactivate_Observation_DTO_Request,
    unknown,
    unknown
>, res: Response_Callback) {
    const params = req.body;
    const is_valid = validator.reactivate_transfer(params);
    if (is_valid.success) {
        const response: Reactivate_Observation_DTO_Response = await reactivate_observation(params);
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