import { SupabaseClient } from "@supabase/supabase-js";
import { Register_DTO_Request } from "../../../../../../../application/use_cases/users/register/register_DTO.js";
import DB_Response from "../../../../parts/DB_Response.js";

async function supabase_register<T>(params: Register_DTO_Request, supabase: SupabaseClient): Promise<DB_Response<T>> {
    let query;
    query = supabase
    .from('users')
    .insert(params)
    .select('*')
    .maybeSingle();

    const { data, error } = await query;

    console.log(error);
     if(error) {
        return {
            status: 400,
            message: `Erro`,
            payload: null
        }
    }

    return {
        status: 201,
        message: 'Usuário adicionar com sucesso',
        payload: data
    };
}

export default supabase_register;