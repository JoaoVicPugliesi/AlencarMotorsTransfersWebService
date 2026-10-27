async function supabase_update_observation(params, supabase) {
    let query;
    query = supabase
        .from('observations')
        .update({
        title: params.title,
        description: params.description
    })
        .eq('id', params.id)
        .select()
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
        message: 'Observação atualizada com sucesso',
        payload: data
    };
}
export default supabase_update_observation;
