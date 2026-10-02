import z from "zod";
import zod_validation_handler from "../../helpers/zod_validation_handler.js";
import { Update_Profile_DTO_Request } from "../../../../../../../application/use_cases/users/update_profile/update_profile_DTO.js";

function zod_update_profile (params: Update_Profile_DTO_Request, zod = z) {
    const schema = zod.object({
    id: zod.string().nonempty(),
    username: zod
        .string()
        .nonempty()
        .regex(/^[a-zA-Z0-9]+$/, "Nome do usuário deve conter apenas letras e números.")
        .max(25),
    });

    const is_valid = schema.safeParse(params);
    return zod_validation_handler(is_valid);
}

export default zod_update_profile;