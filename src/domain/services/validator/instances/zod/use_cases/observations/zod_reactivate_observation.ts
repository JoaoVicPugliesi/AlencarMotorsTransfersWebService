import z from "zod";
import zod_validation_handler from "../../helpers/zod_validation_handler.js";
import { Reactivate_Observation_DTO_Request } from "../../../../../../../application/use_cases/observations/reactivate_observation/reactivate_observation_DTO.js";

function zod_reactivate_observation(
    params: Reactivate_Observation_DTO_Request,
    zod = z
) {
    const schema = zod.object({
        id: zod.string().nonempty(),
        term_date: zod.iso.datetime({
            local: true,
            error: "Prazo deve ser um timestamp válido"
        }),
        username: zod.string().nonempty(),
        password: zod.string().nonempty()
    });
    const is_valid = schema.safeParse(params);
    return zod_validation_handler(is_valid);
}

export default zod_reactivate_observation;