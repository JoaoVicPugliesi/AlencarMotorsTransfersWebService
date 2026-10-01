import Request_Callback from "../../../../domain/services/server/parts/Request_Callback.js";
import Response_Callback from "../../../../domain/services/server/parts/Response_Callback.js";
import validator from "../../../services/validator/validator.js";
import post_observation from "./post_observation.js";
import { Post_Observation_DTO_Request, Post_Observation_DTO_Response } from "./post_observation_DTO.js";

async function post_observation_caller(req: Request_Callback<
    Post_Observation_DTO_Request,
    unknown,
    unknown
>, res: Response_Callback) {
    const params = req.body;
    const is_valid = validator.post_observation(params);

    if (is_valid.success) {
        const response: Post_Observation_DTO_Response = await post_observation(params);
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

export default post_observation_caller;