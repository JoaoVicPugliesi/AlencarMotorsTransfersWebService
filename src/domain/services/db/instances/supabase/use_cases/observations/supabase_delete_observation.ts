import { SupabaseClient } from "@supabase/supabase-js";
import { Delete_Observation_DTO_Request } from "../../../../../../../application/use_cases/observations/delete_observation/delete_observation_DTO.js";

async function supabase_delete_observation (params: Pick<Delete_Observation_DTO_Request, 'observation_id'>, supabase: SupabaseClient) {
    let query;
    query = supabase
    .from('observations')
    .delete()
    .eq('id', params.observation_id)

    const { data, error } = await query;

     if (error) {
        return {
            status: 400,
            message: 'Erro',
            payload: null
        }
    }

    return {
        status: 201,
        message: 'Transferência Excluida',
        payload: null
    };
}

export default supabase_delete_observation;