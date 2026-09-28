import Server from "../domain/services/server/Server.js";
import Fastify from "./instances/fastify.js";

const server: Server = new Fastify();

export default server;