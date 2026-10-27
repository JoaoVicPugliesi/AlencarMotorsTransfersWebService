async function supabase_reactivate_observation(params, supabase) {
    console.log(params);
    let query;
    query = supabase
        .from('observations')
        .update({
        final_date: null,
        term_date: params.term_date,
        status: 'pending'
    })
        .eq('id', params.id)
        .select('*')
        .eq('id', params.id)
        .maybeSingle();
    const { data, error } = await query;
    if (error) {
        return {
            status: 400,
            message: 'Erro',
            payload: null
        };
    }
    if (!data) {
        return {
            status: 404,
            message: 'Observação não existe',
            payload: null
        };
    }
    return {
        status: 200,
        message: 'Observação reativada com sucesso',
        payload: data
    };
}
export default supabase_reactivate_observation;
