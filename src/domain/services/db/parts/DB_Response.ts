type DB_Response <T> = {
    status: number,
    message: string,
    payload: T[] | T | null
}

export default DB_Response;