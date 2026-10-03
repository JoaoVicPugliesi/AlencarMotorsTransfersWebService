import { RealtimeChannel, SupabaseClient } from "@supabase/supabase-js";
import { Channel_User_Notifications_DTO_Request } from "../../../../../../../application/use_cases/notifications/channel_user_notifications/channel_user_notifications_DTO.js";

async function supabase_channel_user_notifications(
    params: Channel_User_Notifications_DTO_Request,
    supabase: SupabaseClient,
    on_notification: (payload: unknown) => void
): Promise<RealtimeChannel | null> {
    const channel = supabase
        .channel(`user-notifications-${params.id}`)
        .on(
            'postgres_changes',
            {
                event: 'INSERT',
                schema: 'public',
                table: 'user_notifications',
                filter: `user_id=eq.${params.id}`
            },
            (payload) => {
                on_notification(payload);
            }
        )
        .subscribe((status, error) => {
            if (error) return null;
        });

    return channel;
}

export default supabase_channel_user_notifications;