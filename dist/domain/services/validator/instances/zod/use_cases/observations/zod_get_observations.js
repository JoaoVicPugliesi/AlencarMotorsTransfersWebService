import z from "zod";
import zod_validation_handler from "../../helpers/zod_validation_handler.js";
function zod_get_observations(params, zod = z) {
    const schema = zod.object({
        id: zod.string().nonempty(),
    });
    const is_valid = schema.safeParse(params);
    return zod_validation_handler(is_valid);
}
export default zod_get_observations;
