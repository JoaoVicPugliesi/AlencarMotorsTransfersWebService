import Request_Callback from "../../../../domain/services/server/parts/Request_Callback.js";
import Response_Callback from "../../../../domain/services/server/parts/Response_Callback.js";
import validator from "../../../services/validator/validator.js";
import update_profile from "./update_profile.js";
import { Update_Profile_DTO_Request, Update_Profile_DTO_Response } from "./update_profile_DTO.js";

async function update_profile_caller(req: Request_Callback<
    Update_Profile_DTO_Request,
    unknown,
    unknown
>, res: Response_Callback) {
    const params = req.body;
    const is_valid = validator.update_profile(params);
    if (is_valid.success) {
        const response: Update_Profile_DTO_Response = await update_profile(params);
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

export default update_profile_caller;