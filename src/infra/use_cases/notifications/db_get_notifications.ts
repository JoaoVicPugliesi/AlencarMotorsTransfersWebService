import { Get_Notifications_DTO_Request } from "../../../application/use_cases/notifications/get_notifications/get_notifications_DTO.js";
import db from "../../db.js";

async function db_get_notifications (params: Get_Notifications_DTO_Request) {
    return await db.get_notifications(params);
}

export default db_get_notifications;