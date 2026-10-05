interface Update_User_Notification_DTO_Request {
    user_id: string,
    notification_id: string,
    viewed_at: unknown
}

interface Update_User_Notification_DTO_Response {
    status: number,
    json: {
        message: string
    }
}

export { Update_User_Notification_DTO_Request, Update_User_Notification_DTO_Response }