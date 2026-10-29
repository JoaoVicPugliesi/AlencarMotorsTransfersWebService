import Transfer from "../../../../domain/entitities/transfer/Transfer.js";
import db_get_transfer from "../../../../infra/use_cases/transfers/db_get_transfer.js";
import cache from "../../../services/cache/cache.js";
import { Get_Transfer_DTO_Request, Get_Transfer_DTO_Response } from "./get_transfer_DTO.js";

async function get_transfer(params: Get_Transfer_DTO_Request): Promise<Get_Transfer_DTO_Response> {
    const cache_key: string = `transfer-${params.id}`;
    const cached_transfer = await cache.get<Transfer>(cache_key);
    if (cached_transfer) {
        return {
            status: 200,
            json: { message: 'Transferência encontrada (Cache)', transfer: cached_transfer }
        };
    }
    const transfer = await db_get_transfer({
        id: params.id
    });

    const { status, message, payload } = transfer;

    if (status !== 200 || !payload || Array.isArray(payload)) {
        return {
            status: status,
            json: {
                message: message,
                transfer: null
            }
        }
    }

    await cache.set(cache_key, payload, 60 * 5)

    return {
        status: status,
        json: {
            message: message,
            transfer: payload
        }
    }
}

export default get_transfer;