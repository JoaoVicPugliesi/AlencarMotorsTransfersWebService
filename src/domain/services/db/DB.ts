import User from "../../entitities/user/User.js";
import DB_Error_Response from "./DB_Error_Response.js";

interface DB { 
    get_user<T>(params: Pick<User, 'username'>): Promise<T | DB_Error_Response>;
}

export default DB;