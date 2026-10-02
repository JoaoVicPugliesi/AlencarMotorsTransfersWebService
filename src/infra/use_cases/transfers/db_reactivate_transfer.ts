import { Reactivate_Transfer_DTO_Request } from "../../../application/use_cases/transfers/reactivate_transfer/reactivate_transfer_DTO.js";
import Transfer from "../../../domain/entitities/transfer/Transfer.js";
import db from "../../db.js";

async function db_reactivate_transfer (params: Reactivate_Transfer_DTO_Request) {
    return await db.reactivate_transfer<Transfer>(params);
}

export default db_reactivate_transfer;