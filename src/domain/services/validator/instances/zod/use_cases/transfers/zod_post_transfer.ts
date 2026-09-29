import z from "zod";
import zod_validation_handler from "../../helpers/zod_validation_handler.js";
import { Post_Transfer_DTO_Request } from "../../../../../../../application/use_cases/transfers/post_transfer/post_transfer_DTO.js";

function zod_post_transfer(
    params: Post_Transfer_DTO_Request,
    zod = z
) {
    const schema = zod.object({
        name: zod
            .string()
            .min(1, "O nome é obrigatório")
            .max(100, "O nome deve ter no máximo 100 caracteres")
            .trim(),
        plate: zod
            .string()
            .toUpperCase()
            .regex(
                /^[A-Z]{3}[0-9][A-Z0-9][0-9]{2}$|^[A-Z]{3}[0-9]{4}$/,
                "A placa deve estar no formato LLLNNNN ou LLLNLNN"
            ),
        vehicle: zod
            .string()
            .min(1, "O veículo é obrigatório")
            .max(25, "O veículo deve ter no máximo 25 caracteres")
            .trim(),
        code: zod
            .string()
            .min(1, "O código é obrigatório")
            .trim(),
        initial_date: zod
            .coerce
            .date({
                error: "A data inicial é inválida"
            }),
        term_date: zod
            .coerce
            .date({
                error: "A data de término é inválida"
            }),
        created_by: zod
            .string(),
        participants: zod
            .array(
                zod.string()
            )
            .min(1, "É necessário informar pelo menos um participante")
    }).refine(
        (data) => data.term_date >= data.initial_date,
        {
            message: "A data de término não pode ser anterior à data inicial",
            path: ["term_date"]
        }
    );

    const is_valid = schema.safeParse(params);

    return zod_validation_handler(is_valid);
}

export default zod_post_transfer;