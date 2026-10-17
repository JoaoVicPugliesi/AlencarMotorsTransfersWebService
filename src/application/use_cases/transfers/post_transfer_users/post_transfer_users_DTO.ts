interface Post_Transfer_Users_DTO_Request {
    user_id: string,
    transfer_id: string
}

interface Post_Transfer_Users_DTO_Response {
    status: number,
    json: {
        message: string
    }
}

export { Post_Transfer_Users_DTO_Request, Post_Transfer_Users_DTO_Response }