async function supabase_delete_user_notification(params, supabase) {
    let query;
    query = supabase
        .from('user_notifications')
        .delete()
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
        message: 'Transferência Excluida',
        payload: null
    };
}
export default supabase_delete_user_notification;
