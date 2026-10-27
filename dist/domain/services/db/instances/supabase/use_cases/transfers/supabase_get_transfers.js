async function supabase_get_transfers(params, supabase) {
    let query;
    query = supabase
        .from('transfers')
        .select('*')
        .in('id', params.transfers_id);
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
        status: 200,
        message: 'Transferência achadas',
        payload: data
    };
}
export default supabase_get_transfers;
