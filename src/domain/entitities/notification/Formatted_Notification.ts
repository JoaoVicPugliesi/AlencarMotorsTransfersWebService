interface Formatted_Notification {
    user_id: string,
    is_viewed: boolean,
    id: number,
    transfer_id: string,
    content: string,
    generated_by: string,
    created_at: Date
}

export default Formatted_Notification;