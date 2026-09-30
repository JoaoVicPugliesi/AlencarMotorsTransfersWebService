import z from "zod";
import zod_validation_handler from "../../helpers/zod_validation_handler.js";
import { Get_Observations_DTO_Request } from "../../../../../../../application/use_cases/observations/get_observations/get_observations_DTO.js";

function zod_get_observations (params: Get_Observations_DTO_Request, zod = z) {
    const schema = zod.object({
        id: zod.string().nonempty(),
    });
    const is_valid = schema.safeParse(params);
    return zod_validation_handler(is_valid);
}

export default zod_get_observations;   