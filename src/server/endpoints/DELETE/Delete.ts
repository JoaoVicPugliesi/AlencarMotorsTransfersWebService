import delete_transfer_caller from "../../../application/use_cases/transfers/delete_transfer/delete_transfer_caller.js";
import Server from "../../../domain/services/server/Server.js";

class Delete {
    private server;

    constructor (server: Server) {
        this.server = server;
    }

    async run () {
       this.server.delete({
            url: '/delete_transfer',
            callback: delete_transfer_caller
       })
    }
}

export default Delete;