import { SupabaseClient } from "@supabase/supabase-js";
import { Conclude_Observation_DTO_Request } from "../../../../../../../application/use_cases/observations/conclude_observation/conclude_observation_DTO.js";
import DB_Response from "../../../../parts/DB_Response.js";

async function supabase_conclude_observation<T>(params: Conclude_Observation_DTO_Request, supabase: SupabaseClient): Promise<DB_Response<T>> {
    let query;
    query = supabase
    .from('observations')
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
            message: 'Observação não existe',
            payload: null
        }
    }
    return {
        status: 200,
        message: 'Observação concluída com sucesso',
        payload: data
    }

}

export default supabase_conclude_observation;