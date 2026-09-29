import { Post_Transfer_DTO_Request, Post_Transfer_Users_DTO_Request } from "../../../application/use_cases/transfers/post_transfer/post_transfer_DTO.js";
import { Register_DTO_Request } from "../../../application/use_cases/users/register/register_DTO.js";
import User from "../../entitities/user/User.js";
import DB_Response from "./parts/DB_Response.js";

interface DB { 
    get_user<T>(params: Pick<User, 'username'>): Promise<DB_Response<T>>;
    get_users<T>(): Promise<DB_Response<T>>;
    register<T>(params: Register_DTO_Request): Promise<DB_Response<T>>;
    post_transfer<T>(params: Omit<Post_Transfer_DTO_Request, 'participants'>): Promise<DB_Response<T>>;
    post_transfer_users<T>(params: Post_Transfer_Users_DTO_Request): Promise<DB_Response<T>>;
}

export default DB;