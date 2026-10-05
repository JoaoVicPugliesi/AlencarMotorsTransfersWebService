import Request_Callback from "../../../../domain/services/server/parts/Request_Callback.js";
import Response_Callback from "../../../../domain/services/server/parts/Response_Callback.js";
import validator from "../../../services/validator/validator.js";
import delete_user_notification from "./delete_user_notification.js";
import { Delete_User_Notification_DTO_Request, Delete_User_Notification_DTO_Response } from "./delete_user_notification_DTO.js";

async function delete_user_notification_caller(req: Request_Callback<
    unknown,
    unknown,
    Delete_User_Notification_DTO_Request
>, res: Response_Callback) {
    const params = req.query;
    const is_valid = validator.delete_user_notification(params);

    if (is_valid.success) {
        const response: Delete_User_Notification_DTO_Response = await delete_user_notification(params);
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

export default delete_user_notification_caller;