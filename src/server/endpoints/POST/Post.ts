import register_caller from "../../../application/use_cases/users/register/register_caller.js";
import Server from "../../../domain/services/server/Server.js";

class Post {
    private server;

    constructor (server: Server) {
        this.server = server;
    }

    async run () {
       this.server.get({
            url: '/register',
            callback: register_caller
       })
    }
}

export default Post;