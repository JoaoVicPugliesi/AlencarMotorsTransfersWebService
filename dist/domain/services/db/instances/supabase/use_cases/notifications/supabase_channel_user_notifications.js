async function supabase_channel_user_notifications(params, supabase, on_notification) {
    console.log(`[Realtime] CREATE user=${params.id} time=${new Date().toISOString()}`);
    const channel = supabase
        .channel(`user-notifications-${params.id}`)
        .on('postgres_changes', {
        event: 'INSERT',
        schema: 'public',
        table: 'user_notifications',
        filter: `user_id=eq.${params.id}`
    }, (payload) => {
        on_notification(payload);
    });
    return new Promise((resolve) => {
        channel.subscribe((status, error) => {
            console.log(`[Realtime] user=${params.id} status=${status}`, error);
            if (status === 'SUBSCRIBED') {
                console.log(`[Realtime] subscribed for user ${params.id}`);
                resolve(channel);
                return;
            }
            if (status === 'CHANNEL_ERROR' ||
                status === 'TIMED_OUT' ||
                status === 'CLOSED') {
                console.error(`[Realtime] channel failed for user ${params.id}`, {
                    status,
                    error,
                    cause: error?.cause
                });
                resolve(null);
            }
        });
    });
}
export default supabase_channel_user_notifications;
