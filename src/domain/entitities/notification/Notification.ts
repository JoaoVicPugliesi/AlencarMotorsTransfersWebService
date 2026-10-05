interface Notification {
    id: string,
    transfer_id: string | null,
    content: string,
    generated_by: string,
    created_at: unknown
}

export default Notification;