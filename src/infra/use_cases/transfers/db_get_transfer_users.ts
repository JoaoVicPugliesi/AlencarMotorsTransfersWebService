import { Get_Transfer_Users_DTO_Request } from "../../../application/use_cases/transfers/get_transfer_participants/get_transfer_users_DTO.js";
import Transfer_Users from "../../../domain/entitities/transfer/Transfer_Users.js";
import db from "../../db.js";

async function db_get_transfer_users(params: Get_Transfer_Users_DTO_Request) {
    return await db.get_transfer_users<Transfer_Users>(params);
}

export default db_get_transfer_users;