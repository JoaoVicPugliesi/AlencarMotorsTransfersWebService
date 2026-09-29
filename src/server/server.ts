import Server from "../domain/services/server/Server.js";
import Fastify from "../domain/services/server/instances/fastify.js";

const server: Server = new Fastify();

export default server;