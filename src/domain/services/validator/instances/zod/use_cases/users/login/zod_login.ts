import z from "zod";
import zod_validation_handler from "../../../helpers/zod_validation_handler.js";
import { Login_DTO_Request } from "../../../../../../../../application/use_cases/users/login/login_DTO.js";

function zod_login (params: Login_DTO_Request, zod = z) {
    const schema = zod.object({
        username: zod.string().nonempty(),
        password: zod.string().nonempty()
    });
    const is_valid = schema.safeParse(params);
    return zod_validation_handler(is_valid);
}

export default zod_login;   