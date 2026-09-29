import { SupabaseClient } from "@supabase/supabase-js";
import { Post_Transfer_DTO_Request } from "../../../../../../../application/use_cases/transfers/post_transfer/post_transfer_DTO.js";
import DB_Response from "../../../../parts/DB_Response.js";

async function supabase_post_transfer<T>(params: Omit<Post_Transfer_DTO_Request, "participants">, supabase: SupabaseClient): Promise<DB_Response<T>> {
    let query;
    query = supabase
        .from('transfers')
        .insert(params)
        .select('*')
        .maybeSingle()

    const { data, error } = await query;

    if (error) {
        return {
            status: 400,
            message: `Erro`,
            payload: null
        }
    }

    return {
        status: 201,
        message: 'Transferência adicionada com sucesso',
        payload: data
    };
}

export default supabase_post_transfer;