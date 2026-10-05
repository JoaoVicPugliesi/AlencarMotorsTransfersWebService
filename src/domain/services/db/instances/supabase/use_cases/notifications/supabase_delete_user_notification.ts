import { SupabaseClient } from "@supabase/supabase-js";
import { Delete_User_Notification_DTO_Request } from "../../../../../../../application/use_cases/notifications/delete_notification/delete_user_notification_DTO.js";
import DB_Response from "../../../../parts/DB_Response.js";

async function supabase_delete_user_notification<T>(params: Delete_User_Notification_DTO_Request, supabase: SupabaseClient): Promise<DB_Response<T>> {
    let query;
    query = supabase
    .from('user_notifications')
    .delete()
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

    return {
        status: 200,
        message: 'Transferência Excluida',
        payload: null
    };
}

export default supabase_delete_user_notification;