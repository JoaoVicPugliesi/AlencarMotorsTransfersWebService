async function supabase_post_user_notifications(params, supabase) {
    let query = supabase
        .from('user_notifications')
        .insert(params)
        .select('*')
        .maybeSingle();
    const { data, error } = await query;
    if (error) {
        return {
            status: 500,
            message: 'Erro',
            payload: null
        };
    }
    ;
    return {
        status: 201,
        message: 'Notificado com sucesso',
        payload: data
    };
}
export default supabase_post_user_notifications;
