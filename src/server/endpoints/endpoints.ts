import Server, { Request_Callback, Response_Callback } from "../../domain/services/server/Server.js";
import Delete from "./DELETE/Delete.js";
import Get from "./GET/Get.js";
import Post from "./POST/Post.js";
import Update from "./UPDATE/Update.js";

class Endpoints {
    private server;
    private get_i;
    private post_i;
    private update_i;
    private delete_i;
    constructor (server: Server) {
        this.server = server;
        this.get_i = new Get(this.server);
        this.post_i = new Post(this.server);
        this.update_i = new Update(this.server);
        this.delete_i = new Delete(this.server);
    }

    private async get () {
        this.get_i.run();
    }
    private async post () {
        this.post_i.run();
    }
    private async update () {
        this.update_i.run();
    }
    private async delete () {
        this.delete_i.run();
    }

    async run () {
        await this.get();
        await this.post();
        await this.update();
        await this.delete();
    }
}

export default Endpoints;