interface Delete_Observation_DTO_Request {
    username: string;
    password: string;
    observation_id: string;
}

interface Delete_Observation_DTO_Response {
    status: number,
    json: {
        message: string
    }
}

export { Delete_Observation_DTO_Request, Delete_Observation_DTO_Response };