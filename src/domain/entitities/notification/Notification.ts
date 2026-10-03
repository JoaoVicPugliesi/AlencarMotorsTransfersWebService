interface Notification {
    id: string,
    transfer_id: string,
    content: string,
    generated_by: string,
    created_at: Date
}

export default Notification;