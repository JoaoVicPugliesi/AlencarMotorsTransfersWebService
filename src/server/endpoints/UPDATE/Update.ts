import conclude_observation_caller from "../../../application/use_cases/observations/conclude_observation/conclude_observation_caller.js";
import reactivate_observation_caller from "../../../application/use_cases/observations/reactivate_observation/reactivate_observation_caller.js";
import conclude_transfer_caller from "../../../application/use_cases/transfers/conclude_transfer/conclude_transfer_caller.js";
import reactivate_transfer_caller from "../../../application/use_cases/transfers/reactivate_transfer/reactivate_transfer_caller.js";
import update_transfer_caller from "../../../application/use_cases/transfers/update_transfer/update_transfer_caller.js";
import Server from "../../../domain/services/server/Server.js";

class Update {
     private server;

     constructor(server: Server) {
          this.server = server;
     }
     async run() {
          this.server.update({
               url: '/conclude_observation',
               callback: conclude_observation_caller
          });
          this.server.update({
               url: '/reactivate_observation',
               callback: reactivate_observation_caller
          });
          this.server.update({
               url: '/update_transfer',
               callback: update_transfer_caller
          })
          this.server.update({
               url: '/conclude_transfer',
               callback: conclude_transfer_caller
          });
          this.server.update({
               url: '/reactivate_transfer',
               callback: reactivate_transfer_caller
          });
     }
}

export default Update;