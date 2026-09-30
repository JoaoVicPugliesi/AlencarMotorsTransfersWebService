import { Post_Transfer_Users_DTO_Request } from "../../../application/use_cases/transfers/post_transfer/post_transfer_DTO.js";
import Transfer from "../../../domain/entitities/transfer/Transfer.js";
import db from "../../db.js";

async function db_post_transfer_users(params: Post_Transfer_Users_DTO_Request) {
    return await db.post_transfer_users<Transfer>(params);
}

export default db_post_transfer_users;