async function supabase_get_transfer(params, supabase) {
    let query;
    query = supabase
        .from('transfers')
        .select('*')
        .eq('id', params.id)
        .maybeSingle();
    const { data, error } = await query;
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
            message: 'Transferência não encontrada',
            payload: null
        };
    }
    return {
        status: 200,
        message: 'Transferência encontrada',
        payload: data
    };
}
export default supabase_get_transfer;
