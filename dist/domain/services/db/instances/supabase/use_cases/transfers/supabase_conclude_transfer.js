async function supabase_conclude_transfer(params, supabase) {
    console.log(params);
    let query;
    query = supabase
        .from('transfers')
        .update({
        final_date: params.final_date,
        status: 'concluded'
    })
        .eq('id', params.id)
        .select('*')
        .eq('id', params.id)
        .maybeSingle();
    const { data, error } = await query;
    console.log(error);
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
            message: 'Transferência não existe',
            payload: null
        };
    }
    return {
        status: 200,
        message: 'Transferência concluída com sucesso',
        payload: data
    };
}
export default supabase_conclude_transfer;
