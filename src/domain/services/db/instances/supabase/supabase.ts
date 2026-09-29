import { createClient } from "@supabase/supabase-js";
import { SUPABASE_PUBLISHABLE_KEY, SUPABASE_URL } from "./supabase_variables.js";
import { Register_DTO_Request } from "../../../../../application/use_cases/users/register/register_DTO.js";
import supabase_get_user from "./use_cases/users/supabase_get_user.js";
import supabase_register from "./use_cases/users/supabase_register.js";
import supabase_get_users from "./use_cases/users/supabase_get_users.js";

import DB from "../../DB.js";
import DB_Response from "../../parts/DB_Response.js";
import User from "../../../../entitities/user/User.js";
import { Post_Transfer_DTO_Request, Post_Transfer_Users_DTO_Request } from "../../../../../application/use_cases/transfers/post_transfer/post_transfer_DTO.js";
import supabase_post_transfer from "./use_cases/transfers/supabase_post_transfer.js";
import supabase_post_transfer_users from "./use_cases/transfers/supabase_post_transfer_users.js";

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
    async get_users<T>(): Promise<DB_Response<T>> {
        return await supabase_get_users(this.supabase);
    }
    async post_transfer<T>(params: Omit<Post_Transfer_DTO_Request, "participants">): Promise<DB_Response<T>> {
        return await supabase_post_transfer(params, this.supabase);
    }
    async post_transfer_users<T>(params: Post_Transfer_Users_DTO_Request): Promise<DB_Response<T>> {
        return await supabase_post_transfer_users(params, this.supabase);
    }
}

export default Supabase;