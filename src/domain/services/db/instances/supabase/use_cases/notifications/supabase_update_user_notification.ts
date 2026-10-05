import { SupabaseClient } from "@supabase/supabase-js";
import { Update_User_Notification_DTO_Request } from "../../../../../../../application/use_cases/notifications/update_user_notifications/update_user_notification_DTO.js";
import DB_Response from "../../../../parts/DB_Response.js";

async function supabase_update_user_notification<T>(params: Update_User_Notification_DTO_Request, supabase: SupabaseClient): Promise<DB_Response<T>> {
    let query;
    query = supabase
    .from('transfers')
    .update({
        is_viewed: true,
        viewed_at: params.viewed_at
    })
    .eq('user_id', params.user_id)
    .eq('notification_id', params.notification_id)
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
            message: 'Erro ao visualizar notificação',
            payload: null
        }
    }
    return {
        status: 200,
        message: 'Notificação visualizada com sucesso',
        payload: null
    }
}

export default supabase_update_user_notification;