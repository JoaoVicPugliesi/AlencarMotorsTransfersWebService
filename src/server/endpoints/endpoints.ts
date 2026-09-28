import Server, { Request_Callback, Response_Callback } from "../../domain/services/server/Server.js";

async function test_endpoint (req: Request_Callback<
    unknown,
    unknown,
    unknown
    >, res: Response_Callback) {
    res.status(200);
    res.json({
        message: 'Hello World'
    });
}

class Endpoints {
    private server;
    constructor (server: Server) {
        this.server = server;
    }

    private async get () {
        await this.server.get<unknown, unknown, unknown>({
            url: '/',
            callback: test_endpoint
        });
    }

    async run () {
        await this.get();
    }
}

export default Endpoints;