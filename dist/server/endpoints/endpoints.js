import Delete from "./DELETE/Delete.js";
import Get from "./GET/Get.js";
import Post from "./POST/Post.js";
import Update from "./UPDATE/Update.js";
class Endpoints {
    server;
    get_i;
    post_i;
    update_i;
    delete_i;
    constructor(server) {
        this.server = server;
        this.get_i = new Get(this.server);
        this.post_i = new Post(this.server);
        this.update_i = new Update(this.server);
        this.delete_i = new Delete(this.server);
    }
    async get() {
        await this.get_i.run();
    }
    async post() {
        await this.post_i.run();
    }
    async update() {
        await this.update_i.run();
    }
    async delete() {
        await this.delete_i.run();
    }
    async run() {
        await this.get();
        await this.post();
        await this.update();
        await this.delete();
    }
}
export default Endpoints;
