async function supabase_delayed_notification(params, supabase) {
    let query;
    query = supabase
        .from(params.mode)
        .update({
        status: 'delayed'
    })
        .eq('id', params.id);
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
        message: 'Atraso registrado',
        payload: null
    };
}
export default supabase_delayed_notification;
