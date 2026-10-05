import { Get_User_Transfers_DTO_Request } from "../../../application/use_cases/transfers/get_transfers/get_transfers_DTO.js";
import Transfer_Users from "../../../domain/entitities/transfer/Transfer_Users.js";
import db from "../../db.js";

async function db_get_user_transfers(params: Get_User_Transfers_DTO_Request) {
    return await db.get_user_transfers<Transfer_Users>(params);
}

export default db_get_user_transfers;