import z from "zod";
import zod_validation_handler from "../../helpers/zod_validation_handler.js";
import { Post_Transfer_Users_DTO_Request } from "../../../../../../../application/use_cases/transfers/post_transfer_users/post_transfer_users_DTO.js";

function zod_post_transfer_users(
    params: Post_Transfer_Users_DTO_Request,
    zod = z) {
    const schema = zod.object({
        user_id: zod.string().nonempty(),
        transfer_id: zod.string().nonempty(),
    });
    const is_valid = schema.safeParse(params);
    return zod_validation_handler(is_valid);
}

export default zod_post_transfer_users;