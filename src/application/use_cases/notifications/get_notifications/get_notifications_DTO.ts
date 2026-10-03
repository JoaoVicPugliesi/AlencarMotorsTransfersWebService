import Formatted_Notification from "../../../../domain/entitities/notification/Formatted_Notification.js";

interface Get_Notifications_DTO_Request {
    transfer_id: string,
    user_id: string,
    unique: boolean | string
}

interface Get_Notifications_DTO_Response {
    status: number,
    json: {
        message: string,
        notifications: Formatted_Notification[] | Formatted_Notification | null
    }
}

export { Get_Notifications_DTO_Request, Get_Notifications_DTO_Response };