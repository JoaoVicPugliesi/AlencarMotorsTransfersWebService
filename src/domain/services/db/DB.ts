import { Register_DTO_Request } from "../../../application/use_cases/users/register/register_DTO.js";
import User from "../../entitities/user/User.js";
import DB_Response from "./parts/DB_Response.js";

interface DB { 
    get_user<T>(params: Pick<User, 'username'>): Promise<DB_Response<T>>;
    get_users<T>(): Promise<DB_Response<T>>;
    register<T>(params: Register_DTO_Request): Promise<DB_Response<T>>;
}

export default DB;