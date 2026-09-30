import { Get_Transfers_Param } from "../../../application/use_cases/transfers/get_transfers/get_transfers_DTO.js";
import Transfer from "../../../domain/entitities/transfer/Transfer.js";
import db from "../../db.js";

async function db_get_transfers(params: Get_Transfers_Param) {
    return await db.get_transfers<Transfer>(params);
}

export default db_get_transfers;