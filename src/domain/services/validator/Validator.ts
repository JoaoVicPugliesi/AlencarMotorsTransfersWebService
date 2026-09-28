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
}

export default Validator;