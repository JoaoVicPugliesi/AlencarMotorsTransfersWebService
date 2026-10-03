import { Channel_User_Notifications_DTO_Request } from "./channel_user_notifications_DTO.js";
import channel_user_notifications from "./channel_user_notifications.js";
import Request_Callback from "../../../../domain/services/server/parts/Request_Callback.js";
import Response_Callback from "../../../../domain/services/server/parts/Response_Callback.js";

async function channel_user_notifications_caller(
    req: Request_Callback <
        unknown,
        unknown,
        Channel_User_Notifications_DTO_Request
    >,
    res: Response_Callback
) {
    const params = req.query;
    res.hijack();
    res.raw.writeHead(200, {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
        'Access-Control-Allow-Origin': '*'
    });
    const channel = await channel_user_notifications(
        params,
        (payload) => {
            console.log(payload);
            res.raw.write(`data: ${JSON.stringify(payload)}\n\n`);
        }
    );
    if(!channel) return;
    res.raw.on('close', async () => { await channel.unsubscribe(); });
}
export default channel_user_notifications_caller;