async function supabase_get_transfer_users(params, supabase) {
    let query;
    query = supabase
        .from('transfer_users')
        .select('*')
        .eq('transfer_id', params.id);
    const { data, error } = await query;
    console.log(data, error);
    if (error) {
        return {
            status: 400,
            message: `Erro`,
            payload: null
        };
    }
    if (!data) {
        return {
            status: 404,
            message: 'Sem Participantes',
            payload: null
        };
    }
    return {
        status: 200,
        message: 'Participantes achados',
        payload: data
    };
}
export default supabase_get_transfer_users;
