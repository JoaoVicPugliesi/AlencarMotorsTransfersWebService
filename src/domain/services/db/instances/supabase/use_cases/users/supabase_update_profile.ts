import { SupabaseClient } from "@supabase/supabase-js";
import { Update_Profile_DTO_Request } from "../../../../../../../application/use_cases/users/update_profile/update_profile_DTO.js";

async function supabase_update_profile (params: Update_Profile_DTO_Request, supabase: SupabaseClient) {
    let query;
    query = supabase
    .from('users')
    .update({
        username: params.username,
    })
    .eq('id', params.id)
    .select('*')
    .eq('id', params.id)
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
            message: 'Usuário não existe',
            payload: null
        }
    }
    return {
        status: 200,
        message: 'Usuário atualizado com sucesso',
        payload: data
    }
}

export default supabase_update_profile