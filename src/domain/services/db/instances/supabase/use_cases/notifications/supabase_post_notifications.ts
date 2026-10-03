import { SupabaseClient } from "@supabase/supabase-js";
import DB_Response from "../../../../parts/DB_Response.js";
import { Post_Notifications_DTO_Request } from "../../../../../../../application/use_cases/notifications/post_notifications/post_notifications_DTO.js";

async function supabase_post_notifications<T>(params: Post_Notifications_DTO_Request, supabase: SupabaseClient): Promise<DB_Response<T>> {
    let query;
    query = supabase
        .from('notifications')
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
        message: 'Notificação adicionada com sucesso',
        payload: data
    };
}

export default supabase_post_notifications;