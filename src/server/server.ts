import Server from "../domain/services/server/Server.js";
import Endpoints from "./endpoints/endpoints.js";
import Fastify from "./instances/fastify.js";

const server: Server = new Fastify();
const endpoints = new Endpoints(server);
endpoints.run();

export default server;