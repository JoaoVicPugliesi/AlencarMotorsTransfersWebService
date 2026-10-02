import { Conclude_Transfer_DTO_Request } from "../../../application/use_cases/transfers/conclude_transfer/conclude_transfer_DTO.js";
import Transfer from "../../../domain/entitities/transfer/Transfer.js";
import db from "../../db.js";

async function db_conclude_transfer (params: Conclude_Transfer_DTO_Request) {
    return await db.conclude_transfer<Transfer>(params);
}

export default db_conclude_transfer;