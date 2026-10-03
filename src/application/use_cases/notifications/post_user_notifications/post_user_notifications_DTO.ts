import User_Notifications from "../../../../domain/entitities/notification/User_Notifications.js"

interface Post_User_Notifications_DTO_Request extends Omit<User_Notifications, 'is_viewed' | 'viewed_at'> {}

interface Post_User_Notifications_DTO_Response {
    status: number,
    json: {
        message: string
    }
}

export { Post_User_Notifications_DTO_Request, Post_User_Notifications_DTO_Response }