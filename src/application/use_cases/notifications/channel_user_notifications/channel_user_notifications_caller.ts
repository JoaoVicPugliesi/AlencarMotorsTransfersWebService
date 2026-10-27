
import { Channel_User_Notifications_DTO_Request } from "./channel_user_notifications_DTO.js";
import channel_user_notifications from "./channel_user_notifications.js";
import Request_Callback from "../../../../domain/services/server/parts/Request_Callback.js";
import Response_Callback from "../../../../domain/services/server/parts/Response_Callback.js";

async function channel_user_notifications_caller(
    req: Request_Callback<
        unknown,
        unknown,
        Channel_User_Notifications_DTO_Request
    >,
    res: Response_Callback
) {
    const params = req.query;
    console.log(`[SSE] OPEN user=${params.id} time=${new Date().toISOString()}`);
    res.hijack();
    res.raw.writeHead(200, {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
	'X-Accel-Buffering': 'no',
        'Access-Control-Allow-Origin': '*'
    });
    const heartbeat = setInterval(() => {
        res.raw.write(': heartbeat\n\n');
    }, 15000);
    const channel = await channel_user_notifications(
        params,
        (payload) => {
            res.raw.write(`data: ${JSON.stringify(payload)}\n\n`);
        }
    );
    if (!channel) {
    clearInterval(heartbeat);

    console.log(
        `[SSE] ENDING user=${params.id} because Realtime channel failed`
    );

    if (!res.raw.destroyed) {
        res.raw.end();
    }

    return;
}
    res.raw.on('close', async () => {
    console.log(
        `[SSE] CLOSE user=${params.id}`,
        new Date().toISOString()
    );

    clearInterval(heartbeat);

    if (channel) {
        await channel.unsubscribe();
    }
});

res.raw.on('error', (error) => {
    console.error(
        `[SSE] ERROR user=${params.id}`,
        error
    );
});
}
export default channel_user_notifications_caller;
