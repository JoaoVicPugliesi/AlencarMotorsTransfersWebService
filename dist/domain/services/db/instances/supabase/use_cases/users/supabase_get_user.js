async function supabase_get_user(params, supabase) {
    let query;
    query = supabase
        .from('users')
        .select('*')
        .eq('username', params.username)
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
            message: 'Usuário não encontrado',
            payload: null
        };
    }
    return {
        status: 200,
        message: 'Usuário encontrado',
        payload: data
    };
}
export default supabase_get_user;
