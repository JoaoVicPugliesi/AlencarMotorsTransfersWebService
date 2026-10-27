import fastify from "fastify";
import fastifyCors from "@fastify/cors";
import { CLIENT_ORIGIN, SERVER_ALLOWED_HEADERS, SERVER_HOST, SERVER_METHODS, SERVER_PORT } from "../../../../server/server_variables.js";
class Fastify {
    server = fastify();
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
        }
        catch (err) {
            console.log(err);
        }
    }
    operation(method, params) {
        this.server[method](params.url, async (request, response) => {
            const req = {
                params: request.params,
                query: request.query,
                body: request.body
            };
            const res = {
                status(code) {
                    response.status(code);
                    return this;
                },
                json(data) {
                    response.send(data);
                },
                hijack() {
                    response.hijack();
                },
                raw: response.raw
            };
            await params.callback(req, res);
        });
    }
    async get(params) {
        this.operation('get', params);
    }
    async post(params) {
        this.operation('post', params);
    }
    async update(params) {
        this.operation('patch', params);
    }
    async delete(params) {
        this.operation('delete', params);
    }
}
export default Fastify;
