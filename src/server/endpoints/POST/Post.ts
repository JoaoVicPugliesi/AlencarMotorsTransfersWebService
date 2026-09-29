import post_transfer_caller from "../../../application/use_cases/transfers/post_transfer/post_transfer_caller.js";
import login_caller from "../../../application/use_cases/users/login/login_caller.js";
import register_caller from "../../../application/use_cases/users/register/register_caller.js";
import Server from "../../../domain/services/server/Server.js";

class Post {
    private server;
    constructor(server: Server) {
        this.server = server;
    }
    async run() {
        this.server.post({
            url: '/register',
            callback: register_caller
        });
        this.server.post({
            url: '/login',
            callback: login_caller
        })
        this.server.post({
            url: '/post_transfer',
            callback: post_transfer_caller
        })
    }
}

export default Post;