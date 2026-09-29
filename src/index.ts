import Endpoints from "./server/endpoints/endpoints.js";
import server from "./server/server.js";

const endpoints = new Endpoints(server);
endpoints.run();
server.run();

