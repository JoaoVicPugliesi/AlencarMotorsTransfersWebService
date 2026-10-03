import get_notifications from "./get_notifications.js";
import { Get_Notifications_DTO_Request } from "./get_notifications_DTO.js";
import Request_Callback from "../../../../domain/services/server/parts/Request_Callback.js";
import Response_Callback from "../../../../domain/services/server/parts/Response_Callback.js";

async function get_notifications_caller(
    req: Request_Callback<
        unknown,
        unknown,
        Get_Notifications_DTO_Request
    >,
    res: Response_Callback
) {
    const params = req.query;

    if(params.unique === 'true') params.unique = true;
    if(params.unique === 'false') params.unique = false;
    const { status, json } = await get_notifications(params);
    res.status(status);
    res.json(json);
}
export default get_notifications_caller;