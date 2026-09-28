import { SupabaseClient } from "@supabase/supabase-js";
import User from "../../../../../../entitities/user/User.js";
import DB_Response from "../../../../parts/DB_Response.js";

async function supabase_get_user<T>(params: Pick<User, 'username'>, supabase: SupabaseClient): Promise<DB_Response<T>> {
    let query;
    query = supabase
    .from('users')
    .select('*')
    .eq('username', params.username)
    .single();

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
            message: 'Não encontrado',
            payload: null
        }
    }

    return {
        status: 200,
        message: 'Encontrado',
        payload: data
    };
}

export default supabase_get_user;