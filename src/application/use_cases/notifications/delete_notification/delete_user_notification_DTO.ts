interface Delete_User_Notification_DTO_Request {
    user_id: string,
    notification_id: string
}

interface Delete_User_Notification_DTO_Response {
    status: number,
    json: {
        message: string,
    }
}

export { Delete_User_Notification_DTO_Request, Delete_User_Notification_DTO_Response };