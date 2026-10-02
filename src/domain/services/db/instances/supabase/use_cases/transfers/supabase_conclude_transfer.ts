import { SupabaseClient } from "@supabase/supabase-js";
import DB_Response from "../../../../parts/DB_Response.js";
import { Conclude_Transfer_DTO_Request } from "../../../../../../../application/use_cases/transfers/conclude_transfer/conclude_transfer_DTO.js";

async function supabase_conclude_transfer<T>(params: Conclude_Transfer_DTO_Request, supabase: SupabaseClient): Promise<DB_Response<T>> {
    let query;
    query = supabase
    .from('transfers')
    .update({
        final_date: params.final_date,
        status: 'concluded'
    })
    .eq('id', params.id)
    .select('*')
    .eq('id', params.id)
    .maybeSingle();

    const { data, error } = await query;

    if(error) {
        return {
            status: 400,
            message: 'Erro',
            payload: null
        }
    }
    
    if(!data) {
        return {
            status: 404,
            message: 'Transferência não existe',
            payload: null
        }
    }
    return {
        status: 200,
        message: 'Transferência concluída com sucesso',
        payload: data
    }

}

export default supabase_conclude_transfer;