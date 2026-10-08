import { SupabaseClient } from "@supabase/supabase-js";
import { Delayed_Notification_DTO_Request } from "../../../../../../../application/use_cases/notifications/delayed_notification/delayed_notification_DTO.js";
import DB_Response from "../../../../parts/DB_Response.js";

async function supabase_delayed_notification<T>(params: Delayed_Notification_DTO_Request, supabase: SupabaseClient): Promise<DB_Response<T>> {
    let query;
    query = supabase
        .from(params.mode)
        .update({
            status: 'delayed'
        })
        .eq('id', params.id)

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
        message: 'Atraso registrado',
        payload: null
    }
}

export default supabase_delayed_notification;