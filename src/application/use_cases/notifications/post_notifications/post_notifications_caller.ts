import Request_Callback from "../../../../domain/services/server/parts/Request_Callback.js";
import Response_Callback from "../../../../domain/services/server/parts/Response_Callback.js";
import validator from "../../../services/validator/validator.js";
import post_notifications from "./post_notifications.js";
import { Post_Notifications_DTO_Request, Post_Notifications_DTO_Response } from "./post_notifications_DTO.js";

async function post_notifications_caller (
    req: Request_Callback<
        Post_Notifications_DTO_Request,
        unknown,
        unknown
    >, res: Response_Callback) {
    const params = req.body;
    const is_valid = validator.post_notifications(params);
    if (is_valid.success) {
        const response: Post_Notifications_DTO_Response = await post_notifications(params);
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

export default post_notifications_caller;