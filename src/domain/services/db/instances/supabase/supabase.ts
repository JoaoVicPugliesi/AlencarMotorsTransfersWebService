import { createClient, SupabaseClient } from "@supabase/supabase-js";
import DB from "../../DB.js";
import DB_Error_Response from "../../parts/DB_Error_Response.js";
import { SUPABASE_PUBLISHABLE_KEY, SUPABASE_URL } from "./supabase_variables.js";
import User from "../../../../entitities/user/User.js";
import supabase_get_user from "./use_cases/users/supabase_get_user.js";

class Supabase implements DB {
    private supabase;
    constructor (){
        this.supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
    }
    async get_user<T>(params: Pick<User, 'username'>): Promise<T | DB_Error_Response> {
        return await supabase_get_user(params, this.supabase);
    }
}

export default Supabase;