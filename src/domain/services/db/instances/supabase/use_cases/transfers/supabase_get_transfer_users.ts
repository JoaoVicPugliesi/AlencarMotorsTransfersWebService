import { SupabaseClient } from "@supabase/supabase-js";
import DB_Response from "../../../../parts/DB_Response.js";
import { Get_Transfer_Users_DTO_Request } from "../../../../../../../application/use_cases/transfers/get_transfers/get_transfers_DTO.js";

async function supabase_get_transfer_users<T>(params: Get_Transfer_Users_DTO_Request, supabase: SupabaseClient): Promise<DB_Response<T>> {
    let query;
    query = supabase
        .from('transfer_users')
        .select('*')
        .eq('user_id', params.id)
    const { data, error } = await query;
    console.log(data, error);
    if (error) {
        return {
            status: 400,
            message: `Erro`,
            payload: null
        }
    }

    if(data.length === 0) {
        return {
            status: 404,
            message: 'Sem transferências',
            payload: null
        }
    }

    return {
        status: 201,
        message: 'Transferência achadas',
        payload: data
    };
}

export default supabase_get_transfer_users;