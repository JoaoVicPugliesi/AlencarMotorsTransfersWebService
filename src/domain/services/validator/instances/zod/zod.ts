import Validator, { Validation_Result } from "../../Validator.js";
import { Register_DTO_Request } from "../../../../../application/use_cases/users/register/register_DTO.js";
import { Login_DTO_Request } from "../../../../../application/use_cases/users/login/login_DTO.js";
import { Get_Users_DTO_Request } from "../../../../../application/use_cases/users/get_users/get_users_DTO.js";
import zod_register from "./use_cases/users/zod_register.js";
import zod_login from "./use_cases/users/zod_login.js";
import zod_get_users from "./use_cases/users/zod_get_users.js";
import { Post_Transfer_DTO_Request } from "../../../../../application/use_cases/transfers/post_transfer/post_transfer_DTO.js";
import zod_post_transfer from "./use_cases/transfers/zod_post_transfer.js";
import { Get_Transfers_DTO_Request } from "../../../../../application/use_cases/transfers/get_transfers/get_transfers_DTO.js";
import zod_get_transfers from "./use_cases/transfers/zod_get_transfers.js";
import { Get_Observations_DTO_Request } from "../../../../../application/use_cases/observations/get_observations/get_observations_DTO.js";
import zod_get_observations from "./use_cases/observations/zod_get_observations.js";
import zod_get_transfer from "./use_cases/transfers/zod_get_transfer.js";
import { Post_Observation_DTO_Request } from "../../../../../application/use_cases/observations/post_observation/post_observation_DTO.js";
import zod_post_observation from "./use_cases/observations/zod_post_observation.js";
import { Get_Observation_DTO_Request } from "../../../../../application/use_cases/observations/get_observation/get_observation_DTO.js";
import zod_get_observation from "./use_cases/observations/zod_get_observation.js";
import { Delete_Transfer_DTO_Request } from "../../../../../application/use_cases/transfers/delete_transfer/delete_transfer_DTO.js";
import zod_delete_transfer from "./use_cases/transfers/zod_delete_transfer.js";
import { Delete_Observation_DTO_Request } from "../../../../../application/use_cases/observations/delete_observation/delete_observation_DTO.js";
import zod_delete_observation from "./use_cases/observations/zod_delete_observation.js";
import { Conclude_Observation_DTO_Request } from "../../../../../application/use_cases/observations/conclude_observation/conclude_observation_DTO.js";
import zod_conclude_observation from "./use_cases/observations/zod_conclude_observation.js";
import { Conclude_Transfer_DTO_Request } from "../../../../../application/use_cases/transfers/conclude_transfer/conclude_transfer_DTO.js";
import zod_conclude_transfer from "./use_cases/transfers/zod_conclude_transfer.js";
import { Reactivate_Transfer_DTO_Request } from "../../../../../application/use_cases/transfers/reactivate_transfer/reactivate_transfer_DTO.js";
import zod_reactivate_transfer from "./use_cases/transfers/zod_reactivate_transfer.js";
import { Reactivate_Observation_DTO_Request } from "../../../../../application/use_cases/observations/reactivate_observation/reactivate_observation_DTO.js";
import zod_reactivate_observation from "./use_cases/observations/zod_reactivate_observation.js";
import { Update_Transfer_DTO_Request } from "../../../../../application/use_cases/transfers/update_transfer/update_transfer_DTO.js";
import zod_update_transfer from "./use_cases/transfers/zod_update_transfer.js";
import { Update_Observation_DTO_Request } from "../../../../../application/use_cases/observations/update_observation/update_observation_DTO.js";
import zod_update_observation from "./use_cases/observations/zod_update_observation.js";
import { Update_Profile_DTO_Request } from "../../../../../application/use_cases/users/update_profile/update_profile_DTO.js";
import zod_update_profile from "./use_cases/users/zod_update_profile.js";
import { Post_User_Notifications_DTO_Request } from "../../../../../application/use_cases/notifications/post_user_notifications/post_user_notifications_DTO.js";
import zod_post_user_notifications from "./use_cases/notifications/zod_post_user_notifications.js";
import { Post_Notifications_DTO_Request } from "../../../../../application/use_cases/notifications/post_notifications/post_notifications_DTO.js";
import zod_post_notifications from "./use_cases/notifications/zod_post_notifications.js";
import { Get_Transfer_Users_DTO_Request } from "../../../../../application/use_cases/transfers/get_transfer_participants/get_transfer_users_DTO.js";
import zod_get_transfer_users from "./use_cases/transfers/zod_get_transfer_users.js";
import { Delete_User_Notification_DTO_Request } from "../../../../../application/use_cases/notifications/delete_notification/delete_user_notification_DTO.js";
import zod_delete_user_notification from "./use_cases/notifications/zod_delete_user_notification.js";

class Zod implements Validator {

    get_users(params: Get_Users_DTO_Request): Validation_Result<Get_Users_DTO_Request> {
        return zod_get_users(params);
    }
    login(params: Login_DTO_Request): Validation_Result<Login_DTO_Request> {
        return zod_login(params);
    }
    register(params: Register_DTO_Request): Validation_Result<Register_DTO_Request> {
        return zod_register(params);
    }
    update_profile(params: Update_Profile_DTO_Request): Validation_Result<Update_Profile_DTO_Request> {
        return zod_update_profile(params);
    }

    get_transfer(params: Get_Transfers_DTO_Request): Validation_Result<Get_Transfers_DTO_Request> {
        return zod_get_transfer(params);
    }
    get_transfers(params: Get_Transfers_DTO_Request): Validation_Result<Get_Transfers_DTO_Request> {
        return zod_get_transfers(params);
    }
    post_transfer(params: Post_Transfer_DTO_Request): Validation_Result<Post_Transfer_DTO_Request> {
        return zod_post_transfer(params);
    }
    delete_transfer(params: Delete_Transfer_DTO_Request): Validation_Result<Delete_Transfer_DTO_Request> {
        return zod_delete_transfer(params);
    }
    conclude_transfer(params: Conclude_Transfer_DTO_Request): Validation_Result<Conclude_Transfer_DTO_Request> {
        return zod_conclude_transfer(params);
    }
    reactivate_transfer(params: Reactivate_Transfer_DTO_Request): Validation_Result<Reactivate_Transfer_DTO_Request> {
        return zod_reactivate_transfer(params);
    }
    update_transfer(params: Update_Transfer_DTO_Request): Validation_Result<Update_Transfer_DTO_Request> {
        return zod_update_transfer(params);
    }
    get_transfer_users(params: Get_Transfer_Users_DTO_Request): Validation_Result<Get_Transfer_Users_DTO_Request> {
        return zod_get_transfer_users(params);
    }
    
    get_observation(params: Get_Observation_DTO_Request): Validation_Result<Get_Observation_DTO_Request> {
        return zod_get_observation(params);
    }
    get_observations(params: Get_Observations_DTO_Request): Validation_Result<Get_Observations_DTO_Request> {
        return zod_get_observations(params);
    }
    post_observation(params: Post_Observation_DTO_Request): Validation_Result<Post_Observation_DTO_Request> {
        return zod_post_observation(params);
    }
    delete_observation(params: Delete_Observation_DTO_Request): Validation_Result<Delete_Observation_DTO_Request> {
        return zod_delete_observation(params);
    }
    conclude_observation(params: Conclude_Observation_DTO_Request): Validation_Result<Conclude_Observation_DTO_Request> {
        return zod_conclude_observation(params);
    }
    reactivate_observation(params: Reactivate_Observation_DTO_Request): Validation_Result<Reactivate_Observation_DTO_Request> {
        return zod_reactivate_observation(params);
    }
    update_observation(params: Update_Observation_DTO_Request): Validation_Result<Update_Observation_DTO_Request> {
        return zod_update_observation(params);
    }

    post_user_notifications(params: Post_User_Notifications_DTO_Request): Validation_Result<Post_User_Notifications_DTO_Request> {
        return zod_post_user_notifications(params);
    }
    post_notifications(params: Post_Notifications_DTO_Request): Validation_Result<Post_Notifications_DTO_Request> {
        return zod_post_notifications(params);
    }
    delete_user_notification(params: Delete_User_Notification_DTO_Request): Validation_Result<Delete_User_Notification_DTO_Request> {
        return zod_delete_user_notification(params);
    }
}

export default Zod;