import Validator, { Validation_Result } from "../../Validator.js";
import { Register_DTO_Request } from "../../../../../application/use_cases/users/register/register_DTO.js";
import zod_register from "./use_cases/users/register/zod_register.js";
import { Login_DTO_Request } from "../../../../../application/use_cases/users/login/login_DTO.js";
import zod_login from "./use_cases/users/login/zod_login.js";

class Zod implements Validator {
    register(params: Register_DTO_Request): Validation_Result<Register_DTO_Request> {
        return zod_register(params);
    }
    login(params: Login_DTO_Request): Validation_Result<Login_DTO_Request> {
        return zod_login(params);
    }
}

export default Zod;