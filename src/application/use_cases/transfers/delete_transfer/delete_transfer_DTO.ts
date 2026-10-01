interface Delete_Transfer_DTO_Request {
    username: string;
    password: string
    transfer_id: string;
}

interface Delete_Transfer_DTO_Response {
    status: number,
    json: {
        message: string
    }
}

export { Delete_Transfer_DTO_Request, Delete_Transfer_DTO_Response };