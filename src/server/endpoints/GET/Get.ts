import get_transfers_caller from "../../../application/use_cases/transfers/get_transfers/get_transfers_caller.js";
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
       this.server.get({
        url: '/get_transfers',
        callback: get_transfers_caller
       })
    }
}

export default Get;