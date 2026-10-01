import { Delete_Observation_DTO_Request } from "../../../application/use_cases/observations/delete_observation/delete_observation_DTO.js";
import Transfer from "../../../domain/entitities/transfer/Transfer.js";
import db from "../../db.js";

async function db_delete_observation(params: Pick<Delete_Observation_DTO_Request, 'observation_id'>) {
    return await db.delete_observation<Transfer>(params);
}

export default db_delete_observation;