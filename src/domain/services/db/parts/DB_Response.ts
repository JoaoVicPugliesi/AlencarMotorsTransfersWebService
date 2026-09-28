type DB_Response <T> = {
    status: number,
    message: string,
    payload: T | null
}

export default DB_Response;