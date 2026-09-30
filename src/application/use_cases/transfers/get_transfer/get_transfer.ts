import db_get_transfer from "../../../../infra/use_cases/transfers/db_get_transfer.js";
import { Get_Transfer_DTO_Request, Get_Transfer_DTO_Response } from "./get_transfer_DTO.js";

async function get_transfer (params: Get_Transfer_DTO_Request): Promise<Get_Transfer_DTO_Response> {
    const transfer = await db_get_transfer({
        id: params.id
    });

    const { status, message, payload } = transfer;

    if(status !== 200 || !payload || Array.isArray(payload)) {
        return {
            status: status,
            json: {
                message: message,
                transfer: null
            }
        }
    }

    return {
        status: status,
        json: {
            message: message,
            transfer: payload
        }
    }
}

export default get_transfer;