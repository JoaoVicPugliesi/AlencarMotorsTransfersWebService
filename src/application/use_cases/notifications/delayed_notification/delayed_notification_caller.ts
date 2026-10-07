import Request_Callback from "../../../../domain/services/server/parts/Request_Callback.js";
import Response_Callback from "../../../../domain/services/server/parts/Response_Callback.js";
import validator from "../../../services/validator/validator.js";
import delayed_notification from "./dalayed_notification.js";
import { Delayed_Notification_DTO_Request, Delayed_Notification_DTO_Response } from "./delayed_notification_DTO.js";

async function delayed_notification_caller(req: Request_Callback<
    Delayed_Notification_DTO_Request,
    unknown,
    unknown
>, res: Response_Callback) {
    const params = req.body;
    const is_valid = validator.delayed_notification(params);
    if (is_valid.success) {
        const response: Delayed_Notification_DTO_Response = await delayed_notification(params);
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

export default delayed_notification_caller;