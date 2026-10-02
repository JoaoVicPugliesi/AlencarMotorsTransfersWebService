import z from "zod";
import zod_validation_handler from "../../helpers/zod_validation_handler.js";
import { Update_Observation_DTO_Request } from "../../../../../../../application/use_cases/observations/update_observation/update_observation_DTO.js";

function zod_update_observation(
    params: Update_Observation_DTO_Request,
    zod = z
) {
    const schema = zod.object({
        id: zod.string().nonempty(),
        title: zod.string().nonempty(),
        description: zod.string().nonempty(),
    })
    const is_valid = schema.safeParse(params);
    return zod_validation_handler(is_valid);
}

export default zod_update_observation;