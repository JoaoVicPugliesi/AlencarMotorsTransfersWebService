import fastifyCors from "@fastify/cors";
import fastify from "fastify";

const server = fastify();

server.register(fastifyCors, {
    origin: 'http://127.0.0.1:5500',
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    allowedHeaders: ['content-type']
});


async function run () {
    try {
        await server.listen({
            port: 3000,
            host: '0.0.0.0'
        });
        console.log(`Server is running on http://127.0.0.1:3000`)
    } catch (err) {
        console.log(err);
    }
}

run();