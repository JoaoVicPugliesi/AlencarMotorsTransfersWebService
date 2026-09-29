import z from "zod";
import { Get_Users_DTO_Request } from "../../../../../../../application/use_cases/users/get_users/get_users_DTO.js";
import zod_validation_handler from "../../helpers/zod_validation_handler.js";

function zod_get_users (params: Get_Users_DTO_Request, zod = z) {
    const schema = zod.object({
        username: zod.string().nonempty(),
    });
    const is_valid = schema.safeParse(params);
    return zod_validation_handler(is_valid);
}

export default zod_get_users;   