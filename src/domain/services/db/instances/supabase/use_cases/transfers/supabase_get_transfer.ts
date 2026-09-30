import { SupabaseClient } from "@supabase/supabase-js";
import DB_Response from "../../../../parts/DB_Response.js";
import { Get_Transfer_DTO_Request } from "../../../../../../../application/use_cases/transfers/get_transfer/get_transfer_DTO.js";

async function supabase_get_transfer<T>(params: Get_Transfer_DTO_Request, supabase: SupabaseClient): Promise<DB_Response<T>> {
    let query;
    query = supabase
    .from('transfers')
    .select('*')
    .eq('id', params.id)
    .maybeSingle();

    const { data, error } = await query;
    if(error) {
        return {
            status: 400,
            message: `Erro`,
            payload: null
        }
    }

    if(!data) {
        return {
            status: 404,
            message: 'Transferência não encontrada',
            payload: null
        }
    }

    return {
        status: 200,
        message: 'Transferência encontrada',
        payload: data
    };
}

export default supabase_get_transfer;