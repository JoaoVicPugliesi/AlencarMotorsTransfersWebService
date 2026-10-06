import { SupabaseClient } from "@supabase/supabase-js";
import { Delete_Transfer_DTO_Request } from "../../../../../../../application/use_cases/transfers/delete_transfer/delete_transfer_DTO.js";

async function supabase_delete_transfer (params: Pick<Delete_Transfer_DTO_Request, 'transfer_id'>, supabase: SupabaseClient) {
    let query;
    query = supabase
    .from('transfers')
    .delete()
    .eq('id', params.transfer_id)

    const { data, error } = await query;
    console.log(error);
     if (error) {
        return {
            status: 400,
            message: 'Erro',
            payload: null
        }
    }

    return {
        status: 200,
        message: 'Transferência Excluida',
        payload: null
    };
}

export default supabase_delete_transfer;