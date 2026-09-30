import { Get_Transfer_DTO_Request } from "../../../application/use_cases/transfers/get_transfer/get_transfer_DTO.js";
import Transfer from "../../../domain/entitities/transfer/Transfer.js";
import db from "../../db.js";

async function db_get_transfer(params: Get_Transfer_DTO_Request) {
    return await db.get_transfer<Transfer>(params);
}

export default db_get_transfer;