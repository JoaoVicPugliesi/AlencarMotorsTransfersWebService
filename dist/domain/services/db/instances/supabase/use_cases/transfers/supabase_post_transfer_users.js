async function supabase_post_transfer_users(params, supabase) {
    let query;
    query = supabase
        .from('transfer_users')
        .insert(params);
    const { data, error } = await query;
    if (error) {
        return {
            status: 400,
            message: `Erro`,
            payload: null
        };
    }
    return {
        status: 201,
        message: 'Usuário adicionado à transferência com sucesso',
        payload: null
    };
}
export default supabase_post_transfer_users;
