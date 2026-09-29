import { createClient } from "@supabase/supabase-js";
import DB from "../../DB.js";
import DB_Response from "../../parts/DB_Response.js";
import { SUPABASE_PUBLISHABLE_KEY, SUPABASE_URL } from "./supabase_variables.js";
import User from "../../../../entitities/user/User.js";
import supabase_get_user from "./use_cases/users/supabase_get_user.js";
import { Register_DTO_Request } from "../../../../../application/use_cases/users/register/register_DTO.js";
import supabase_register from "./use_cases/users/supabase_register.js";
import { Login_DTO_Request } from "../../../../../application/use_cases/users/login/login_DTO.js";

class Supabase implements DB {
    private supabase;
    constructor (){
        this.supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
    }
    async get_user<T>(params: Pick<User, 'username'>): Promise<DB_Response<T>> {
        return await supabase_get_user(params, this.supabase);
    }
    async register<T>(params: Register_DTO_Request): Promise<DB_Response<T>> {
        return await supabase_register(params, this.supabase);
    }
}

export default Supabase;