import { SupabaseClient } from "@supabase/supabase-js";
import DB_Response from "../../../../parts/DB_Response.js";
import { Post_Observation_DTO_Request } from "../../../../../../../application/use_cases/observations/post_observation/post_observation_DTO.js";

async function supabase_post_observation<T>(params: Post_Observation_DTO_Request, supabase: SupabaseClient): Promise<DB_Response<T>> {
    let query;
    query = supabase
        .from('observations')
        .insert(params)
        .select('*')
        .maybeSingle()

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
        status: 201,
        message: 'Observação adicionada com sucesso',
        payload: data
    };
}

export default supabase_post_observation;