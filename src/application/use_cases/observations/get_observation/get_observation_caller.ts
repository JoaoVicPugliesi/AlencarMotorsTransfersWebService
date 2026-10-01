import Request_Callback from "../../../../domain/services/server/parts/Request_Callback.js";
import Response_Callback from "../../../../domain/services/server/parts/Response_Callback.js";
import validator from "../../../services/validator/validator.js";
import get_observation from "./get_observation.js";
import { Get_Observation_DTO_Request, Get_Observation_DTO_Response } from "./get_observation_DTO.js";

async function get_observation_caller(req: Request_Callback<
    unknown,
    unknown,
    Get_Observation_DTO_Request
>, res: Response_Callback) {
    const params = req.query;
    const is_valid = validator.get_observation(params);

    if (is_valid.success) {
        const response: Get_Observation_DTO_Response = await get_observation(params);
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

export default get_observation_caller;