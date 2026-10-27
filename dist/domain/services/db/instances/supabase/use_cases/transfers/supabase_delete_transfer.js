async function supabase_delete_transfer(params, supabase) {
    let query;
    query = supabase
        .from('transfers')
        .delete()
        .eq('id', params.transfer_id);
    const { data, error } = await query;
    console.log(error);
    if (error) {
        return {
            status: 400,
            message: 'Erro',
            payload: null
        };
    }
    return {
        status: 200,
        message: 'Transferência Excluida',
        payload: null
    };
}
export default supabase_delete_transfer;
