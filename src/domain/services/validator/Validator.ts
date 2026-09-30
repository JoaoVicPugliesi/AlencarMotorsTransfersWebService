import { Get_Observations_DTO_Request } from "../../../application/use_cases/observations/get_observations/get_observations_DTO.js";
import { Get_Transfers_DTO_Request } from "../../../application/use_cases/transfers/get_transfers/get_transfers_DTO.js";
import { Post_Transfer_DTO_Request } from "../../../application/use_cases/transfers/post_transfer/post_transfer_DTO.js";
import { Get_Users_DTO_Request } from "../../../application/use_cases/users/get_users/get_users_DTO.js";
import { Login_DTO_Request } from "../../../application/use_cases/users/login/login_DTO.js";
import { Register_DTO_Request } from "../../../application/use_cases/users/register/register_DTO.js";

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
    register(params: Register_DTO_Request): Validation_Result<Register_DTO_Request>;
    login(params: Login_DTO_Request): Validation_Result<Login_DTO_Request>;
    get_users(params: Get_Users_DTO_Request): Validation_Result<Get_Users_DTO_Request>;
    post_transfer(params: Post_Transfer_DTO_Request): Validation_Result<Post_Transfer_DTO_Request>;
    get_transfers(params: Get_Transfers_DTO_Request): Validation_Result<Get_Transfers_DTO_Request>;
    get_observations(params: Get_Observations_DTO_Request): Validation_Result<Get_Observations_DTO_Request>;
    get_transfer(params: Get_Transfers_DTO_Request): Validation_Result<Get_Transfers_DTO_Request>;
}

export default Validator;