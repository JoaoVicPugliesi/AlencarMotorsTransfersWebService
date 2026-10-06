import delete_user_notification_caller from "../../../application/use_cases/notifications/delete_notification/delete_user_notification_caller.js";
import delete_observation_caller from "../../../application/use_cases/observations/delete_observation/delete_observation_caller.js";
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
       this.server.delete({
            url: '/delete_observation',
            callback: delete_observation_caller
       })
       this.server.delete({
            url: '/delete_user_notification',
            callback: delete_user_notification_caller
       })
    }
}

export default Delete;