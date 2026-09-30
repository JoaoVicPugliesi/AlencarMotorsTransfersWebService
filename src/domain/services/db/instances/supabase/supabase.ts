import DB from "../../DB.js";
import DB_Response from "../../parts/DB_Response.js";
import User from "../../../../entitities/user/User.js";
import supabase_get_user from "./use_cases/users/supabase_get_user.js";
import supabase_register from "./use_cases/users/supabase_register.js";
import supabase_get_users from "./use_cases/users/supabase_get_users.js";
import supabase_post_transfer from "./use_cases/transfers/supabase_post_transfer.js";
import supabase_post_transfer_users from "./use_cases/transfers/supabase_post_transfer_users.js";
import supabase_get_transfer_users from "./use_cases/transfers/supabase_get_transfer_users.js";
import { createClient } from "@supabase/supabase-js";
import { SUPABASE_PUBLISHABLE_KEY, SUPABASE_URL } from "./supabase_variables.js";
import { Register_DTO_Request } from "../../../../../application/use_cases/users/register/register_DTO.js";
import { Post_Transfer_DTO_Request, Post_Transfer_Users_DTO_Request } from "../../../../../application/use_cases/transfers/post_transfer/post_transfer_DTO.js";
import { Get_Transfer_Users_DTO_Request, Get_Transfers_DTO_Request, Get_Transfers_Param } from "../../../../../application/use_cases/transfers/get_transfers/get_transfers_DTO.js";
import supabase_get_transfers from "./use_cases/transfers/supabase_get_transfers.js";
import { Get_Observations_DTO_Request } from "../../../../../application/use_cases/observations/get_observations/get_observations_DTO.js";
import supabase_get_observations from "./use_cases/observations/supabase_get_observations.js";

class Supabase implements DB {
    private supabase;
    constructor (){
        this.supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
    }
    async get_user<T>(params: Pick<User, 'username'>): Promise<DB_Response<T>> {
        return await supabase_get_user(params, this.supabase);
    }
    async register<T>(params: Omit<Register_DTO_Request, 'admin_username'>): Promise<DB_Response<T>> {
        return await supabase_register(params, this.supabase);
    }
    async get_users<T>(): Promise<DB_Response<T>> {
        return await supabase_get_users(this.supabase);
    }
    async get_transfers<T>(params: Get_Transfers_Param): Promise<DB_Response<T>> {
        return await supabase_get_transfers (params, this.supabase)
    }
    async post_transfer<T>(params: Omit<Post_Transfer_DTO_Request, "participants">): Promise<DB_Response<T>> {
        return await supabase_post_transfer(params, this.supabase);
    }
    async post_transfer_users<T>(params: Post_Transfer_Users_DTO_Request): Promise<DB_Response<T>> {
        return await supabase_post_transfer_users(params, this.supabase);
    }
    async get_transfer_users<T>(params: Get_Transfer_Users_DTO_Request): Promise<DB_Response<T>> {
        return await supabase_get_transfer_users(params, this.supabase);
    }
    async get_observations<T>(params: Get_Observations_DTO_Request): Promise<DB_Response<T>> {
        return await supabase_get_observations(params, this.supabase);
    }
}

export default Supabase;