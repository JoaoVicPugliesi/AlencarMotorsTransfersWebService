async function supabase_get_user_transfers(params, supabase) {
    let query;
    query = supabase
        .from('transfer_users')
        .select('*')
        .eq('user_id', params.id);
    const { data, error } = await query;
    if (error) {
        return {
            status: 400,
            message: `Erro`,
            payload: null
        };
    }
    if (data.length === 0) {
        return {
            status: 404,
            message: 'Sem transferências',
            payload: null
        };
    }
    return {
        status: 201,
        message: 'Transferência achadas',
        payload: data
    };
}
export default supabase_get_user_transfers;
