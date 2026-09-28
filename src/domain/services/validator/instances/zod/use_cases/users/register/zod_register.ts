import z from "zod";
import { Register_DTO_Request } from "../../../../../../../../application/use_cases/users/register/register_DTO.js";
import zod_validation_handler from "../../../helpers/zod_validation_handler.js";

function zod_register (params: Register_DTO_Request, zod = z) {
    const schema = zod.object({
    username: zod
        .string()
        .nonempty()
        .regex(/^[a-zA-Z0-9]+$/, "Username must contain only letters and numbers."),

    password: zod
        .string()
        .min(8, "Password must contain at least 8 characters.")
        .max(12, "Password must contain at most 12 characters.")
        .regex(/[A-Z]/, "Password must contain at least one uppercase letter.")
        .regex(/[a-z]/, "Password must contain at least one lowercase letter.")
        .regex(/[^a-zA-Z0-9\s]/, "Password must contain at least one symbol.")
        .regex(/^\S+$/, "Password cannot contain spaces."),

    role: zod
        .enum(["admin", "user"])
        .nonoptional(),
    }) 
    const is_valid = schema.safeParse(params);
    return zod_validation_handler(is_valid);
}

export default zod_register;