async function supabase_delete_observation(params, supabase) {
    let query;
    query = supabase
        .from('observations')
        .delete()
        .eq('id', params.observation_id);
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
        message: 'Observação Excluida',
        payload: null
    };
}
export default supabase_delete_observation;
