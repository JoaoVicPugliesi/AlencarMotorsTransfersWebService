import { Conclude_Observation_DTO_Request } from "../../../application/use_cases/observations/conclude_observation/conclude_observation_DTO.js";
import { Delete_Observation_DTO_Request } from "../../../application/use_cases/observations/delete_observation/delete_observation_DTO.js";
import { Get_Observation_DTO_Request } from "../../../application/use_cases/observations/get_observation/get_observation_DTO.js";
import { Get_Observations_DTO_Request } from "../../../application/use_cases/observations/get_observations/get_observations_DTO.js";
import { Post_Observation_DTO_Request } from "../../../application/use_cases/observations/post_observation/post_observation_DTO.js";
import { Reactivate_Observation_DTO_Request } from "../../../application/use_cases/observations/reactivate_observation/reactivate_observation_DTO.js";
import { Update_Observation_DTO_Request } from "../../../application/use_cases/observations/update_observation/update_observation_DTO.js";
import { Conclude_Transfer_DTO_Request } from "../../../application/use_cases/transfers/conclude_transfer/conclude_transfer_DTO.js";
import { Delete_Transfer_DTO_Request } from "../../../application/use_cases/transfers/delete_transfer/delete_transfer_DTO.js";
import { Get_Transfers_DTO_Request } from "../../../application/use_cases/transfers/get_transfers/get_transfers_DTO.js";
import { Post_Transfer_DTO_Request } from "../../../application/use_cases/transfers/post_transfer/post_transfer_DTO.js";
import { Reactivate_Transfer_DTO_Request } from "../../../application/use_cases/transfers/reactivate_transfer/reactivate_transfer_DTO.js";
import { Update_Transfer_DTO_Request } from "../../../application/use_cases/transfers/update_transfer/update_transfer_DTO.js";
import { Update_Profile_DTO_Request } from "../../../application/use_cases/users/update_profile/update_profile_DTO.js";
import { Get_Users_DTO_Request } from "../../../application/use_cases/users/get_users/get_users_DTO.js";
import { Login_DTO_Request } from "../../../application/use_cases/users/login/login_DTO.js";
import { Register_DTO_Request } from "../../../application/use_cases/users/register/register_DTO.js";
import { Post_User_Notifications_DTO_Request } from "../../../application/use_cases/notifications/post_user_notifications/post_user_notifications_DTO.js";
import { Post_Notifications_DTO_Request } from "../../../application/use_cases/notifications/post_notifications/post_notifications_DTO.js";
import { Get_Transfer_Users_DTO_Request } from "../../../application/use_cases/transfers/get_transfer_participants/get_transfer_users_DTO.js";
import { Delete_User_Notification_DTO_Request } from "../../../application/use_cases/notifications/delete_notification/delete_user_notification_DTO.js";
import { Update_User_Notification_DTO_Request } from "../../../application/use_cases/notifications/update_user_notifications/update_user_notification_DTO.js";

interface Error {
    origin?: string;
    code?: string;
    format?: any;
    pattern?: string;
    path?: (string | number)[];
    message?: string;

}

interface Errors {
    errors: Error[]
}

interface Errors_List {
    list: Errors[]
}

interface Validation_Success<T> {
    success: true;
    data: T;
}

interface Validation_Failure {
    success: false;
    error: Errors_List
}

export type Validation_Result<T> = Validation_Success<T> | Validation_Failure;

interface Validator {
    get_users(params: Get_Users_DTO_Request): Validation_Result<Get_Users_DTO_Request>;
    login(params: Login_DTO_Request): Validation_Result<Login_DTO_Request>;
    register(params: Register_DTO_Request): Validation_Result<Register_DTO_Request>;
    update_profile(params: Update_Profile_DTO_Request): Validation_Result<Update_Profile_DTO_Request>;

    get_transfers(params: Get_Transfers_DTO_Request): Validation_Result<Get_Transfers_DTO_Request>;
    get_transfer(params: Get_Transfers_DTO_Request): Validation_Result<Get_Transfers_DTO_Request>;
    post_transfer(params: Post_Transfer_DTO_Request): Validation_Result<Post_Transfer_DTO_Request>;
    update_transfer(params: Update_Transfer_DTO_Request): Validation_Result<Update_Transfer_DTO_Request>;
    delete_transfer(params: Delete_Transfer_DTO_Request): Validation_Result<Delete_Transfer_DTO_Request>;
    conclude_transfer(params: Conclude_Transfer_DTO_Request): Validation_Result<Conclude_Transfer_DTO_Request>;
    reactivate_transfer(params: Reactivate_Transfer_DTO_Request): Validation_Result<Reactivate_Transfer_DTO_Request>;
    get_transfer_users(params: Get_Transfer_Users_DTO_Request): Validation_Result<Get_Transfer_Users_DTO_Request>;
    
    get_observation(params: Get_Observation_DTO_Request): Validation_Result<Get_Observation_DTO_Request>;
    get_observations(params: Get_Observations_DTO_Request): Validation_Result<Get_Observations_DTO_Request>;
    post_observation(params: Post_Observation_DTO_Request): Validation_Result<Post_Observation_DTO_Request>;
    delete_observation(params: Delete_Observation_DTO_Request): Validation_Result<Delete_Observation_DTO_Request>;
    conclude_observation(params: Conclude_Observation_DTO_Request): Validation_Result<Conclude_Observation_DTO_Request>;
    reactivate_observation(params: Reactivate_Observation_DTO_Request): Validation_Result<Reactivate_Observation_DTO_Request>;
    update_observation(params: Update_Observation_DTO_Request): Validation_Result<Update_Observation_DTO_Request>;

    post_user_notifications(params: Post_User_Notifications_DTO_Request): Validation_Result<Post_User_Notifications_DTO_Request>;
    post_notifications(params: Post_Notifications_DTO_Request): Validation_Result<Post_Notifications_DTO_Request>;
    delete_user_notification(params: Delete_User_Notification_DTO_Request): Validation_Result<Delete_User_Notification_DTO_Request>;
    update_user_notification(params: Update_User_Notification_DTO_Request): Validation_Result<Update_User_Notification_DTO_Request>;
}

export default Validator;