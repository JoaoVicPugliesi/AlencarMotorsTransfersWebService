import conclude_observation_caller from "../../../application/use_cases/observations/conclude_observation/conclude_observation_caller.js";
import conclude_transfer_caller from "../../../application/use_cases/transfers/conclude_transfer/conclude_transfer_caller.js";
import Server from "../../../domain/services/server/Server.js";

class Update {
    private server;

    constructor (server: Server) {
        this.server = server;
    }
    async run () {
       this.server.update({
            url: '/conclude_observation',
            callback: conclude_observation_caller
       });
       this.server.update({
            url: '/conclude_transfer',
            callback: conclude_transfer_caller
       });
    }
}

export default Update;