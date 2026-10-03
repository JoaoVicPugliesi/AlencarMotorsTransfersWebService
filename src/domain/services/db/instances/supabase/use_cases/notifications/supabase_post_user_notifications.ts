import { SupabaseClient } from "@supabase/supabase-js";
import DB_Response from "../../../../parts/DB_Response.js";
import { Post_User_Notifications_DTO_Request } from "../../../../../../../application/use_cases/notifications/post_user_notifications/post_user_notifications_DTO.js";

async function supabase_post_user_notifications<T>(params: Post_User_Notifications_DTO_Request, supabase: SupabaseClient): Promise<DB_Response<T>> {
    let query = supabase
    .from('user_notifications')
    .insert(params)
    .select('*')
    .maybeSingle()

    const { data, error } = await query;

    if(error) {
        return {
            status: 500,
            message: 'Erro',
            payload: null
        }
    };
    
    return {
        status: 201,
        message: 'Notificado com sucesso',
        payload: data
    };
}

export default supabase_post_user_notifications;