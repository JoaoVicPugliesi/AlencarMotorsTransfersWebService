import { Update_Transfer_DTO_Request } from "../../../application/use_cases/transfers/update_transfer/update_transfer_DTO.js";
import Transfer from "../../../domain/entitities/transfer/Transfer.js";
import db from "../../db.js";

async function db_update_transfer (params: Update_Transfer_DTO_Request) {
    return await db.update_transfer<Transfer>(params);
}

export default db_update_transfer;