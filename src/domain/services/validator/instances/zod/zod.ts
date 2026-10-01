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

class Zod implements Validator {
    register(params: Register_DTO_Request): Validation_Result<Register_DTO_Request> {
        return zod_register(params);
    }
    login(params: Login_DTO_Request): Validation_Result<Login_DTO_Request> {
        return zod_login(params);
    }
    get_users(params: Get_Users_DTO_Request): Validation_Result<Get_Users_DTO_Request> {
        return zod_get_users(params);
    }
    post_transfer(params: Post_Transfer_DTO_Request): Validation_Result<Post_Transfer_DTO_Request> {
        return zod_post_transfer(params);
    }
    get_transfers(params: Get_Transfers_DTO_Request): Validation_Result<Get_Transfers_DTO_Request> {
        return zod_get_transfers(params);
    }
    get_observations(params: Get_Observations_DTO_Request): Validation_Result<Get_Observations_DTO_Request> {
        return zod_get_observations(params);
    }
    get_transfer(params: Get_Transfers_DTO_Request): Validation_Result<Get_Transfers_DTO_Request> {
        return zod_get_transfer(params);
    }
    post_observation(params: Post_Observation_DTO_Request): Validation_Result<Post_Observation_DTO_Request> {
        return zod_post_observation(params);
    }
}

export default Zod;