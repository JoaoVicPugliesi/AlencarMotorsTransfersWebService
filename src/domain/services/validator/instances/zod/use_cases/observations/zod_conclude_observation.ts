import z from "zod";
import zod_validation_handler from "../../helpers/zod_validation_handler.js";
import { Conclude_Observation_DTO_Request } from "../../../../../../../application/use_cases/observations/conclude_observation/conclude_observation_DTO.js";

function zod_conclude_observation(
    params: Conclude_Observation_DTO_Request,
    zod = z
) {
    const schema = zod.object({
        id: zod.string().nonempty(),
        final_date: zod.iso.datetime({
            local: true,
            error: "A data de término deve ser um timestamp válido"
        }),
    });
    const is_valid = schema.safeParse(params);
    return zod_validation_handler(is_valid);
}

export default zod_conclude_observation;