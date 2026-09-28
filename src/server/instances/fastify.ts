import fastify from "fastify";
import fastifyCors from "@fastify/cors";
import {
    CLIENT_ORIGIN,
    SERVER_ALLOWED_HEADERS,
    SERVER_HOST,
    SERVER_METHODS,
    SERVER_PORT
} from "../server_variables.js";
import Server, { Crud_Operations, Request_Callback, Response_Callback } from "../../domain/services/server/Server.js";

class Fastify implements Server {
    private server = fastify();
    constructor() {
        this.register();
    }
    async register() {
        this.server.register(fastifyCors, {
            origin: CLIENT_ORIGIN,
            methods: SERVER_METHODS,
            allowedHeaders: SERVER_ALLOWED_HEADERS
        });
    }

    async listen() {
        await this.server.listen({
            port: SERVER_PORT,
            host: SERVER_HOST
        });
    }

    async run() {
        try {
            this.listen();
            console.log(`Server is running on http://${SERVER_HOST}:${SERVER_PORT}`);
        } catch (err) {
            console.log(err);
        }
    }

    public operation (
        method: "get" | "post" | "patch" | "delete",
        params: Crud_Operations
    ): void {
        this.server[method](params.url, async (request, response) => {

            const req: Request_Callback = {
                params: request.params as Record<string, string>,
                query: request.query as Record<string, string>,
                body: request.body
            };

            const res: Response_Callback = {
                status(code: number) {
                    response.status(code);
                    return this;
                },

                json(data: unknown) {
                    response.send(data);
                }
            };

            await params.callback(req, res);
        });
    }

    async get(params: Crud_Operations): Promise<void> {
        this.operation('get', params);
    }
    async post(params: Crud_Operations): Promise<void> {
        this.operation('post', params);
    }
    async update(params: Crud_Operations): Promise<void> {
        this.operation('patch', params);
    }
    async delete(params: Crud_Operations): Promise<void> {
        this.operation('delete', params);
    }
}

export default Fastify;