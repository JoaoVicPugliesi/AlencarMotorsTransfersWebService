async function supabase_get_observations(params, supabase) {
    let query;
    query = supabase
        .from('observations')
        .select('*')
        .eq('transfer_id', params.id);
    const { data, error } = await query;
    if (error) {
        return {
            status: 400,
            message: 'Erro interno',
            payload: null
        };
    }
    if (data.length === 0) {
        return {
            status: 404,
            message: 'Sem observações',
            payload: null
        };
    }
    return {
        status: 200,
        message: 'Observações encontradas',
        payload: data
    };
}
export default supabase_get_observations;
