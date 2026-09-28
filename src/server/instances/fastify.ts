import fastify from "fastify";
import fastifyCors from "@fastify/cors";
import { 
    CLIENT_ORIGIN, 
    SERVER_ALLOWED_HEADERS, 
    SERVER_HOST, 
    SERVER_METHODS, 
    SERVER_PORT 
} from "../server_variables.js";

class Fastify {
    private server = fastify();
    constructor() {
        this.register();
    }
    private register() {
        this.server.register(fastifyCors, {
            origin: CLIENT_ORIGIN,
            methods: SERVER_METHODS,
            allowedHeaders: SERVER_ALLOWED_HEADERS
        });
    }
    async run() {
        try {
            await this.server.listen({
                port: SERVER_PORT,
                host: SERVER_HOST
            });
            console.log(`Server is running on http://${SERVER_HOST}:${SERVER_PORT}`);
        } catch (err) {
            console.log(err);
        }
    }
}

export default Fastify;