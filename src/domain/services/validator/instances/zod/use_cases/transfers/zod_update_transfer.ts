import z from "zod";
import zod_validation_handler from "../../helpers/zod_validation_handler.js";
import { Update_Transfer_DTO_Request } from "../../../../../../../application/use_cases/transfers/update_transfer/update_transfer_DTO.js";

function zod_update_transfer(
    params: Update_Transfer_DTO_Request,
    zod = z
) {
    const schema = zod.object({
        id: zod.string().nonempty(),
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
        });
    const is_valid = schema.safeParse(params);
    return zod_validation_handler(is_valid);
}

export default zod_update_transfer;