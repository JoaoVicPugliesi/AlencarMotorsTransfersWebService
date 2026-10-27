async function supabase_conclude_observation(params, supabase) {
    let query;
    query = supabase
        .from('observations')
        .update({
        final_date: params.final_date,
        status: 'concluded'
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
        message: 'Observação concluída com sucesso',
        payload: data
    };
}
export default supabase_conclude_observation;
