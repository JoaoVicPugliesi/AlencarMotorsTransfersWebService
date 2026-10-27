async function supabase_post_notifications(params, supabase) {
    let query;
    query = supabase
        .from('notifications')
        .insert(params)
        .select('*')
        .maybeSingle();
    const { data, error } = await query;
    console.log(error);
    if (error) {
        return {
            status: 400,
            message: 'Erro',
            payload: null
        };
    }
    return {
        status: 201,
        message: 'Notificação adicionada com sucesso',
        payload: data
    };
}
export default supabase_post_notifications;
