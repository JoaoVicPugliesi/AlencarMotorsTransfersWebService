import Request_Callback from "../../../../domain/services/server/parts/Request_Callback.js";
import Response_Callback from "../../../../domain/services/server/parts/Response_Callback.js";
import validator from "../../../services/validator/validator.js";
import conclude_observation from "./conclude_observation.js";
import { Conclude_Observation_DTO_Request, Conclude_Observation_DTO_Response } from "./conclude_observation_DTO.js";

async function conclude_observation_caller(req: Request_Callback<
    Conclude_Observation_DTO_Request,
    unknown,
    unknown
>, res: Response_Callback) {
    const params = req.body;
    const is_valid = validator.conclude_observation(params);
    if (is_valid.success) {
        const response: Conclude_Observation_DTO_Response = await conclude_observation(params);
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