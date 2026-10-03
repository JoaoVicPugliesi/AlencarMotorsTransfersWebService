import { Channel_User_Notifications_DTO_Request } from "../../../application/use_cases/notifications/channel_user_notifications/channel_user_notifications_DTO.js";
import { Get_Notifications_DTO_Request } from "../../../application/use_cases/notifications/get_notifications/get_notifications_DTO.js";
import { Post_User_Notifications_DTO_Request } from "../../../application/use_cases/notifications/post_user_notifications/post_user_notifications_DTO.js";
import { Conclude_Observation_DTO_Request } from "../../../application/use_cases/observations/conclude_observation/conclude_observation_DTO.js";
import { Delete_Observation_DTO_Request } from "../../../application/use_cases/observations/delete_observation/delete_observation_DTO.js";
import { Get_Observation_DTO_Request } from "../../../application/use_cases/observations/get_observation/get_observation_DTO.js";
import { Get_Observations_DTO_Request } from "../../../application/use_cases/observations/get_observations/get_observations_DTO.js";
import { Post_Observation_DTO_Request } from "../../../application/use_cases/observations/post_observation/post_observation_DTO.js";
import { Reactivate_Observation_DTO_Request } from "../../../application/use_cases/observations/reactivate_observation/reactivate_observation_DTO.js";
import { Update_Observation_DTO_Request } from "../../../application/use_cases/observations/update_observation/update_observation_DTO.js";
import { Conclude_Transfer_DTO_Request } from "../../../application/use_cases/transfers/conclude_transfer/conclude_transfer_DTO.js";
import { Delete_Transfer_DTO_Request } from "../../../application/use_cases/transfers/delete_transfer/delete_transfer_DTO.js";
import { Get_Transfer_DTO_Request } from "../../../application/use_cases/transfers/get_transfer/get_transfer_DTO.js";
import { Get_Transfer_Users_DTO_Request, Get_Transfers_Param } from "../../../application/use_cases/transfers/get_transfers/get_transfers_DTO.js";
import { Post_Transfer_DTO_Request, Post_Transfer_Users_DTO_Request } from "../../../application/use_cases/transfers/post_transfer/post_transfer_DTO.js";
import { Reactivate_Transfer_DTO_Request } from "../../../application/use_cases/transfers/reactivate_transfer/reactivate_transfer_DTO.js";
import { Update_Transfer_DTO_Request } from "../../../application/use_cases/transfers/update_transfer/update_transfer_DTO.js";
import { Register_DTO_Request } from "../../../application/use_cases/users/register/register_DTO.js";
import { Update_Profile_DTO_Request } from "../../../application/use_cases/users/update_profile/update_profile_DTO.js";
import Formatted_Notification from "../../entitities/notification/Formatted_Notification.js";
import User from "../../entitities/user/User.js";
import Channel from "./parts/Channel.js";
import DB_Response from "./parts/DB_Response.js";

interface DB { 
    get_user<T>(params: Pick<User, 'username'>): Promise<DB_Response<T>>;
    get_users<T>(): Promise<DB_Response<T>>;
    register<T>(params: Omit<Register_DTO_Request, 'admin_username'>): Promise<DB_Response<T>>;
    update_profile<T>(params: Update_Profile_DTO_Request): Promise<DB_Response<T>>
    
    get_transfer<T>(params: Get_Transfer_DTO_Request): Promise<DB_Response<T>>;
    get_transfers<T>(params: Get_Transfers_Param): Promise<DB_Response<T>>;
    post_transfer<T>(params: Omit<Post_Transfer_DTO_Request, 'participants'>): Promise<DB_Response<T>>;
    delete_transfer<T>(params: Pick<Delete_Transfer_DTO_Request, 'transfer_id'>): Promise<DB_Response<T>>;
    get_transfer_users<T>(params: Get_Transfer_Users_DTO_Request): Promise<DB_Response<T>>;
    post_transfer_users<T>(params: Post_Transfer_Users_DTO_Request): Promise<DB_Response<T>>;
    conclude_transfer<T>(params: Conclude_Transfer_DTO_Request): Promise<DB_Response<T>>
    reactivate_transfer<T>(params: Reactivate_Transfer_DTO_Request): Promise<DB_Response<T>>
    update_transfer<T>(params: Update_Transfer_DTO_Request): Promise<DB_Response<T>>
    
    get_observation<T>(params: Get_Observation_DTO_Request): Promise<DB_Response<T>>;
    get_observations<T>(params: Get_Observations_DTO_Request): Promise<DB_Response<T>>;
    post_observation<T>(params: Post_Observation_DTO_Request): Promise<DB_Response<T>>;
    delete_observation<T>(params: Pick<Delete_Observation_DTO_Request, 'observation_id'>): Promise<DB_Response<T>>;
    conclude_observation<T>(params: Conclude_Observation_DTO_Request): Promise<DB_Response<T>>
    reactivate_observation<T>(params: Reactivate_Observation_DTO_Request): Promise<DB_Response<T>>
    update_observation<T>(params: Update_Observation_DTO_Request): Promise<DB_Response<T>>

    get_notifications(params: Get_Notifications_DTO_Request): Promise<Formatted_Notification[] | Formatted_Notification | null>
    channel_user_notifications(params: Channel_User_Notifications_DTO_Request,  on_notification: (notification: unknown) => void): Promise<Channel | null>
    post_user_notifications<T>(params: Post_User_Notifications_DTO_Request): Promise<DB_Response<T>>
}

export default DB;