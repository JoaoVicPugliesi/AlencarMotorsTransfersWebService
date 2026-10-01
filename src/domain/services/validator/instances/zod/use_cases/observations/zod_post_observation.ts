import z from "zod";
import zod_validation_handler from "../../helpers/zod_validation_handler.js";
import { Post_Observation_DTO_Request } from "../../../../../../../application/use_cases/observations/post_observation/post_observation_DTO.js";

function zod_post_observation(
    params: Post_Observation_DTO_Request,
    zod = z
) {
    const schema = zod.object({
        transfer_id: zod.string().nonempty(),
        title: zod.string().nonempty(),
        description: zod.string().nonempty(),
        initial_date: zod.iso.datetime({
            local: true,
            error: "A data inicial deve ser um timestamp válido"
        }),

        term_date: zod.iso.datetime({
            local: true,
            error: "A data de término deve ser um timestamp válido"
        }),
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

export default zod_post_observation;