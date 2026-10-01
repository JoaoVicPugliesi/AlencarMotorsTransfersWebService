import Request_Callback from "../../../../domain/services/server/parts/Request_Callback.js";
import Response_Callback from "../../../../domain/services/server/parts/Response_Callback.js";
import validator from "../../../services/validator/validator.js";
import delete_observation from "./delete_observation.js";
import { Delete_Observation_DTO_Request, Delete_Observation_DTO_Response } from "./delete_observation_DTO.js";

async function delete_observation_caller(req: Request_Callback<
    unknown,
    unknown,
    Delete_Observation_DTO_Request
>, res: Response_Callback) {
    const params = req.query;
    const is_valid = validator.delete_observation(params);

    if (is_valid.success) {
        const response: Delete_Observation_DTO_Response = await delete_observation(params);
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