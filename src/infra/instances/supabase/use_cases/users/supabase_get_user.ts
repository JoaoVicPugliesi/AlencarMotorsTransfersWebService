import { SupabaseClient } from "@supabase/supabase-js";
import User from "../../../../../domain/entitities/user/User.js";
import DB_Error_Response from "../../../../../domain/services/db/DB_Error_Response.js";

async function supabase_get_user<T>(params: Pick<User, 'username'>, supabase: SupabaseClient): Promise<T | DB_Error_Response> {
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
            message: `error: ${error}`
        }
    }

    if(!data) {
        return {
            status: 404,
            message: 'Not Found'
        }
    }

    return data;
}

export default supabase_get_user;