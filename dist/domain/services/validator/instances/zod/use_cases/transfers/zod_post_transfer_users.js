import z from "zod";
import zod_validation_handler from "../../helpers/zod_validation_handler.js";
function zod_post_transfer_users(params, zod = z) {
    const schema = zod.object({
        user_id: zod.string().nonempty(),
        transfer_id: zod.string().nonempty(),
    });
    const is_valid = schema.safeParse(params);
    return zod_validation_handler(is_valid);
}
export default zod_post_transfer_users;
