async function supabase_register(params, supabase) {
    let query;
    query = supabase
        .from('users')
        .insert(params)
        .select('*')
        .maybeSingle();
    const { data, error } = await query;
    console.log(error);
    if (error) {
        return {
            status: 400,
            message: `Erro`,
            payload: null
        };
    }
    return {
        status: 201,
        message: 'Usuário adicionado com sucesso',
        payload: data
    };
}
export default supabase_register;
