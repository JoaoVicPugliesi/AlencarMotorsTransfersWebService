async function supabase_update_user_notification(params, supabase) {
    let query;
    query = supabase
        .from('user_notifications')
        .update({
        is_viewed: true,
        viewed_at: params.viewed_at
    })
        .eq('user_id', params.user_id)
        .eq('notification_id', params.notification_id);
    const { data, error } = await query;
    if (error) {
        return {
            status: 400,
            message: 'Erro',
            payload: null
        };
    }
    return {
        status: 200,
        message: 'Notificação visualizada com sucesso',
        payload: null
    };
}
export default supabase_update_user_notification;
