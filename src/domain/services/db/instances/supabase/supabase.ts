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
import { Get_Transfer_Users_DTO_Request, Get_Transfers_Param } from "../../../../../application/use_cases/transfers/get_transfers/get_transfers_DTO.js";
import supabase_get_transfers from "./use_cases/transfers/supabase_get_transfers.js";
import { Get_Observations_DTO_Request } from "../../../../../application/use_cases/observations/get_observations/get_observations_DTO.js";
import supabase_get_observations from "./use_cases/observations/supabase_get_observations.js";
import { Get_Transfer_DTO_Request } from "../../../../../application/use_cases/transfers/get_transfer/get_transfer_DTO.js";
import supabase_get_transfer from "./use_cases/transfers/supabase_get_transfer.js";
import { Post_Observation_DTO_Request } from "../../../../../application/use_cases/observations/post_observation/post_observation_DTO.js";
import supabase_post_observation from "./use_cases/observations/supabase_post_observation.js";
import { Get_Observation_DTO_Request } from "../../../../../application/use_cases/observations/get_observation/get_observation_DTO.js";
import supabase_get_observation from "./use_cases/observations/supabase_get_observation.js";
import supabase_delete_transfer from "./use_cases/transfers/supabase_delete_transfer.js";
import { Delete_Transfer_DTO_Request } from "../../../../../application/use_cases/transfers/delete_transfer/delete_transfer_DTO.js";
import { Delete_Observation_DTO_Request } from "../../../../../application/use_cases/observations/delete_observation/delete_observation_DTO.js";
import supabase_delete_observation from "./use_cases/observations/supabase_delete_observation.js";
import { Conclude_Observation_DTO_Request } from "../../../../../application/use_cases/observations/conclude_observation/conclude_observation_DTO.js";
import supabase_conclude_observation from "./use_cases/observations/supabase_conclude_observation.js";
import { Conclude_Transfer_DTO_Request } from "../../../../../application/use_cases/transfers/conclude_transfer/conclude_transfer_DTO.js";
import supabase_conclude_transfer from "./use_cases/transfers/supabase_conclude_transfer.js";
import { Reactivate_Transfer_DTO_Request } from "../../../../../application/use_cases/transfers/reactivate_transfer/reactivate_transfer_DTO.js";
import supabase_reactivate_transfer from "./use_cases/transfers/supabase_reactivate_transfer.js";
import { Reactivate_Observation_DTO_Request } from "../../../../../application/use_cases/observations/reactivate_observation/reactivate_observation_DTO.js";
import supabase_reactivate_observation from "./use_cases/observations/supabase_reactivate_observation.js";
import { Update_Transfer_DTO_Request } from "../../../../../application/use_cases/transfers/update_transfer/update_transfer_DTO.js";
import supabase_update_transfer from "./use_cases/transfers/supabase_update_transfer.js";
import { Update_Observation_DTO_Request } from "../../../../../application/use_cases/observations/update_observation/update_observation_DTO.js";
import supabase_update_observation from "./use_cases/observations/supabase_update_observation.js";
import { Update_Profile_DTO_Request } from "../../../../../application/use_cases/users/update_profile/update_profile_DTO.js";
import supabase_update_profile from "./use_cases/users/supabase_update_profile.js";
import { Channel_User_Notifications_DTO_Request } from "../../../../../application/use_cases/notifications/channel_user_notifications/channel_user_notifications_DTO.js";
import supabase_channel_user_notifications from "./use_cases/notifications/supabase_channel_user_notifications.js";
import Channel from "../../parts/Channel.js";
import { Get_Notifications_DTO_Request } from "../../../../../application/use_cases/notifications/get_notifications/get_notifications_DTO.js";
import Formatted_Notification from "../../../../entitities/notification/Formatted_Notification.js";
import supabase_get_notifications from "./use_cases/notifications/supabase_get_notifications.js";

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
    async update_profile<T>(params: Update_Profile_DTO_Request): Promise<DB_Response<T>> {
        return await supabase_update_profile(params, this.supabase);
    }

    async get_transfer<T>(params: Get_Transfer_DTO_Request): Promise<DB_Response<T>> {
        return await supabase_get_transfer(params, this.supabase)
    }
    async get_transfers<T>(params: Get_Transfers_Param): Promise<DB_Response<T>> {
        return await supabase_get_transfers (params, this.supabase)
    }
    async post_transfer<T>(params: Omit<Post_Transfer_DTO_Request, "participants">): Promise<DB_Response<T>> {
        return await supabase_post_transfer(params, this.supabase);
    }
    async delete_transfer<T>(params: Pick<Delete_Transfer_DTO_Request, 'transfer_id'>): Promise<DB_Response<T>> {
        return await supabase_delete_transfer(params, this.supabase);
    }
    async get_transfer_users<T>(params: Get_Transfer_Users_DTO_Request): Promise<DB_Response<T>> {
        return await supabase_get_transfer_users(params, this.supabase);
    }
    async post_transfer_users<T>(params: Post_Transfer_Users_DTO_Request): Promise<DB_Response<T>> {
        return await supabase_post_transfer_users(params, this.supabase);
    }
    async conclude_transfer<T>(params: Conclude_Transfer_DTO_Request): Promise<DB_Response<T>> {
        return await supabase_conclude_transfer(params, this.supabase);
    }
    async reactivate_transfer<T>(params: Reactivate_Transfer_DTO_Request): Promise<DB_Response<T>> {
        return await supabase_reactivate_transfer(params, this.supabase);
    }
    async update_transfer<T>(params: Update_Transfer_DTO_Request): Promise<DB_Response<T>> {
        return await supabase_update_transfer(params, this.supabase);
    }
    
    async get_observations<T>(params: Get_Observations_DTO_Request): Promise<DB_Response<T>> {
        return await supabase_get_observations(params, this.supabase);
    }
    async post_observation<T>(params: Post_Observation_DTO_Request): Promise<DB_Response<T>> {
        return await supabase_post_observation(params, this.supabase);
    }
    async get_observation<T>(params: Get_Observation_DTO_Request): Promise<DB_Response<T>> {
        return await supabase_get_observation(params, this.supabase);
    }
    async delete_observation<T>(params: Pick<Delete_Observation_DTO_Request, 'observation_id'>): Promise<DB_Response<T>> {
        return await supabase_delete_observation(params, this.supabase);
    }
    async conclude_observation<T>(params: Conclude_Observation_DTO_Request): Promise<DB_Response<T>> {
        return await supabase_conclude_observation(params, this.supabase);
    }
    async reactivate_observation<T>(params: Reactivate_Observation_DTO_Request): Promise<DB_Response<T>> {
        return await supabase_reactivate_observation(params, this.supabase);
    }
    async update_observation<T>(params: Update_Observation_DTO_Request): Promise<DB_Response<T>> {
        return await supabase_update_observation(params, this.supabase);
    }

    async channel_user_notifications(params: Channel_User_Notifications_DTO_Request, on_notification: (notification: unknown) => void): Promise<Channel | null> {
        return await supabase_channel_user_notifications(params, this.supabase, on_notification);
    }
    async get_notifications(params: Get_Notifications_DTO_Request): Promise<Formatted_Notification[] | Formatted_Notification | null> {
        return await supabase_get_notifications(params, this.supabase)
    }
}

export default Supabase;