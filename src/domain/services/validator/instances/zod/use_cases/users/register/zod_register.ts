import z from "zod";
import { Register_DTO_Request } from "../../../../../../../../application/use_cases/users/register/register_DTO.js";
import zod_validation_handler from "../../../helpers/zod_validation_handler.js";

function zod_register (params: Register_DTO_Request, zod = z) {
    const schema = zod.object({
    username: zod
        .string()
        .nonempty()
        .regex(/^[a-zA-Z0-9]+$/, "Nome do usuário deve conter apenas letras e números.")
        .max(25),

    password: zod
        .string()
        .nonempty()
        .min(8, "Senha deve conter ao menos 8 caractéres.")
        .max(15, "Senha deve conter no máximo 12 caractéres.")
        .regex(/[A-Z]/, "Senha deve conter no pelo menos uma letra maiuscula.")
        .regex(/[a-z]/, "Senha deve conter no pelo menos uma letra minuscula.")
        .regex(/[^a-zA-Z0-9\s]/, "Senha deve conter pelo menos um símbolo.")
        .regex(/^\S+$/, "Senha não pode conter espaços."),

    role: zod
        .enum(["admin", "user"])
        .nonoptional()
    }) 
    const is_valid = schema.safeParse(params);
    return zod_validation_handler(is_valid);
}

export default zod_register;