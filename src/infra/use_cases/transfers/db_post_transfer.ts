import { Post_Transfer_DTO_Request } from "../../../application/use_cases/transfers/post_transfer/post_transfer_DTO.js";
import Transfer from "../../../domain/entitities/transfer/Transfer.js";
import db from "../../db.js";

async function db_post_transfer(params: Omit<Post_Transfer_DTO_Request, 'participants'>) {
    return await db.post_transfer<Transfer>(params);
}

export default db_post_transfer;