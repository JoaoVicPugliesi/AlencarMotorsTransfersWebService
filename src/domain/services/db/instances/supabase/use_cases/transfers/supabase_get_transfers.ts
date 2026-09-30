import { SupabaseClient } from "@supabase/supabase-js";
import DB_Response from "../../../../parts/DB_Response.js";
import { Get_Transfers_Param } from "../../../../../../../application/use_cases/transfers/get_transfers/get_transfers_DTO.js";

async function supabase_get_transfers<T>(params: Get_Transfers_Param, supabase: SupabaseClient): Promise<DB_Response<T>> {
    let query;
    query = supabase
        .from('transfers')
        .select('*')
        .in('id', params.transfers_id)
    const { data, error } = await query;

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
        status: 200,
        message: 'Transferência achadas',
        payload: data
    };
}

export default supabase_get_transfers;