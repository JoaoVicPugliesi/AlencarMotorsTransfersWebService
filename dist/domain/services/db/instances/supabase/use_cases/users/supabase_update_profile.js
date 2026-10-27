async function supabase_update_profile(params, supabase) {
    let query;
    query = supabase
        .from('users')
        .update({
        username: params.username,
    })
        .eq('id', params.id)
        .select('*')
        .eq('id', params.id)
        .maybeSingle();
    const { data, error } = await query;
    console.log(data, error);
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
            message: 'Usuário não existe',
            payload: null
        };
    }
    return {
        status: 200,
        message: 'Usuário atualizado com sucesso',
        payload: data
    };
}
export default supabase_update_profile;
