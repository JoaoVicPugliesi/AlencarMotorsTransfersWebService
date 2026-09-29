import get_users_caller from "../../../application/use_cases/users/get_users/get_users_caller.js";
import Server from "../../../domain/services/server/Server.js";

class Get {
    private server;
    constructor (server: Server) {
        this.server = server;
    }
    async run () {
       this.server.get({
        url: '/get_users',
        callback: get_users_caller
       })
    }
}

export default Get;