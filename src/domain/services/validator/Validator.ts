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
   
}

export default Validator;