import Validator, { Validation_Result } from "../../Validator.js";
import { Register_DTO_Request } from "../../../../../application/use_cases/users/register/register_DTO.js";
import zod_register from "./use_cases/users/register/zod_register.js";

class Zod implements Validator {
    register(params: Register_DTO_Request): Validation_Result<Register_DTO_Request> {
        return zod_register(params);
    }
}

export default Zod;