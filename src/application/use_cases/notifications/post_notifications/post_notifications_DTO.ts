import Notification from "../../../../domain/entitities/notification/Notification.js"

interface Post_Notifications_DTO_Request extends Omit<Notification, 'id'> {};

interface Post_Notifications_DTO_Response {
    status: number,
    json: {
        message: string,
        notification: Notification | null
    }
}

export { Post_Notifications_DTO_Request, Post_Notifications_DTO_Response }