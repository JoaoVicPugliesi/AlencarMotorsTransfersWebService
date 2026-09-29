import { SupabaseClient } from "@supabase/supabase-js";
import { Post_Transfer_Users_DTO_Request } from "../../../../../../../application/use_cases/transfers/post_transfer/post_transfer_DTO.js";
import DB_Response from "../../../../parts/DB_Response.js";

async function supabase_post_transfer_users<T>(params: Post_Transfer_Users_DTO_Request, supabase: SupabaseClient): Promise<DB_Response<T>> {
    let query;
    query = supabase
        .from('transfer_users')
        .insert(params)
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
        message: 'Usuário adicionado a transferência com sucesso',
        payload: null
    };
}

export default supabase_post_transfer_users;