import { Delayed_Notification_DTO_Request } from "../../../application/use_cases/notifications/delayed_notification/delayed_notification_DTO.js";
import Observation from "../../../domain/entitities/observation/Observation.js";
import Transfer from "../../../domain/entitities/transfer/Transfer.js";
import db from "../../db.js";

async function db_delayed_notifications (params: Delayed_Notification_DTO_Request) {
    return await db.delayed_notification<Transfer | Observation>(params);
}

export default db_delayed_notifications;