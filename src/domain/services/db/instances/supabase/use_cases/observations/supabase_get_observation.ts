import { SupabaseClient } from "@supabase/supabase-js";
import DB_Response from "../../../../parts/DB_Response.js";
import { Get_Observation_DTO_Request } from "../../../../../../../application/use_cases/observations/get_observation/get_observation_DTO.js";

async function supabase_get_observation<T>(params: Get_Observation_DTO_Request, supabase: SupabaseClient): Promise<DB_Response<T>> {
    console.log(params);
    let query;
    query = supabase
    .from('observations')
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
    console.log(data);

    if(!data) {
        return {
            status: 404,
            message: 'Observação não encontrada',
            payload: null
        }
    }

    return {
        status: 200,
        message: 'Observação encontrada',
        payload: data
    };
}

export default supabase_get_observation;