import { SupabaseClient } from "@supabase/supabase-js";
import DB_Response from "../../../../parts/DB_Response.js";

async function supabase_get_users<T>(supabase: SupabaseClient): Promise<DB_Response<T>> {
    let query;
    query = supabase
    .from('users')
    .select('*')

    const { data, error} = await query;

    if(error) {
        return {
            status: 400,
            message: 'Erro interno',
            payload: null
        }
    }

    if(data.length === 0) {
        return {
            status: 404,
            message: 'Usuários não encontrados',
            payload: null
        }
    }

    return {
        status: 200,
        message: 'Usuários encontrados',
        payload: data
    }
}

export default supabase_get_users;