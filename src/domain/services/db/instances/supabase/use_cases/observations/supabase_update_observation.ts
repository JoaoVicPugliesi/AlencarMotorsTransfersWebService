import { SupabaseClient } from "@supabase/supabase-js";
import { Update_Observation_DTO_Request } from "../../../../../../../application/use_cases/observations/update_observation/update_observation_DTO.js";
import { title } from "node:process";

async function supabase_update_observation (params: Update_Observation_DTO_Request, supabase: SupabaseClient) {
    let query;
    query = supabase
    .from('transfers')
    .update({
        title: params.title,
        description: params.description
    })
    .eq('id', params.id)
    .select()
    .maybeSingle();

    const { data, error } = await query;

    if (error) {
        return {
            status: 400,
            message: 'Erro',
            payload: null
        }
    }

    if (!data) {
        return {
            status: 404,
            message: 'Observação não existe',
            payload: null
        }
    }
    return {
        status: 200,
        message: 'Observação atualizada com sucesso',
        payload: data
    }
}

export default supabase_update_observation;