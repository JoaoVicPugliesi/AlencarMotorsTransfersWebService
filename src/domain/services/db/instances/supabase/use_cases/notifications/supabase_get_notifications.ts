import { SupabaseClient } from "@supabase/supabase-js";
import { Get_Notifications_DTO_Request } from "../../../../../../../application/use_cases/notifications/get_notifications/get_notifications_DTO.js";
import Formatted_Notification from "../../../../../../entitities/notification/Formatted_Notification.js";

async function supabase_get_notifications<T>(
    params: Get_Notifications_DTO_Request,
    supabase: SupabaseClient
): Promise<Formatted_Notification[] | Formatted_Notification | null> {
    console.log(params);
    if (params.unique) {

        const { data: notification, error: notification_error } =
            await supabase
                .from('notifications')
                .select('*')
                .eq('id', params.transfer_id)
                .maybeSingle();

        if (notification_error) {
            console.log(notification_error);
            return null;
        }

        if (!notification) {
            return null;
        }

        const {
            data: user_notification,
            error: user_notification_error
        } = await supabase
            .from('user_notifications')
            .select('user_id, notification_id, is_viewed')
            .eq('user_id', params.user_id)
            .eq('notification_id', notification.id)
            .maybeSingle();

        if (user_notification_error) {
            console.log(user_notification_error);
            return null;
        }

        if (!user_notification) {
            return null;
        }

        return {
            user_id: user_notification.user_id,
            is_viewed: user_notification.is_viewed,
            id: notification.id,
            transfer_id: notification.transfer_id,
            content: notification.content,
            generated_by: notification.generated_by,
            created_at: notification.created_at,
        };
    }

    const seven_days_ago = new Date();

    seven_days_ago.setDate(
        seven_days_ago.getDate() - 7
    );

    const {
        data: user_notifications,
        error: user_notifications_error
    } = await supabase
        .from('user_notifications')
        .select('user_id, notification_id, is_viewed')
        .eq('user_id', params.user_id)
        .gte('notified_at', seven_days_ago.toISOString());

    if (user_notifications_error) {
        console.log(user_notifications_error);
        return null;
    }

    if (
        !user_notifications ||
        user_notifications.length === 0
    ) {
        return [];
    }

    const notifications_id = user_notifications.map(
        notification => notification.notification_id
    );

    const {
        data: notifications,
        error: notifications_error
    } = await supabase
        .from('notifications')
        .select('*')
        .in('id', notifications_id);

    if (notifications_error) {
        console.log(notifications_error);
        return null;
    }

    if (!notifications) {
        return null;
    }

    const notifications_map = new Map(
        notifications.map(notification => [
            notification.id,
            notification
        ])
    );

    const formatted_notifications: Formatted_Notification[] =
        user_notifications
            .map(user_notification => {

                const notification =
                    notifications_map.get(
                        user_notification.notification_id
                    );

                if (!notification) {
                    return null;
                }

                return {
                    user_id: user_notification.user_id,
                    is_viewed: user_notification.is_viewed,
                    id: notification.id,
                    transfer_id: notification.transfer_id,
                    content: notification.content,
                    generated_by: notification.generated_by,
                    created_at: notification.created_at,
                };
            })
            .filter(
                (
                    notification
                ): notification is Formatted_Notification =>
                    notification !== null
            );

    return formatted_notifications;
}

export default supabase_get_notifications;

