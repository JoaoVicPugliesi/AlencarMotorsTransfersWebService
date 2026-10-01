import { Delete_Transfer_DTO_Request } from "../../../application/use_cases/transfers/delete_transfer/delete_transfer_DTO.js";
import Transfer from "../../../domain/entitities/transfer/Transfer.js";
import db from "../../db.js";

async function db_delete_transfer(params: Pick<Delete_Transfer_DTO_Request, 'transfer_id'>) {
    return await db.delete_transfer<Transfer>(params);
}

export default db_delete_transfer;