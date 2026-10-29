import Transfer_Users from "../../../../domain/entitities/transfer/Transfer_Users.js";
import db_get_transfer_users from "../../../../infra/use_cases/transfers/db_get_transfer_users.js";
import cache from "../../../services/cache/cache.js";
import { Get_Transfer_Users_DTO_Request, Get_Transfer_Users_DTO_Response } from "./get_transfer_users_DTO.js";

async function get_transfer_users (params: Get_Transfer_Users_DTO_Request): Promise<Get_Transfer_Users_DTO_Response> {
    const cache_key = `transfer-users-${params.id}`;
    const cached_transfer_users: Transfer_Users[] | null = await cache.get<Transfer_Users[]>(cache_key);
    if(cached_transfer_users) {
        return {
            status: 200,
            json: {
                message: 'Transferências encontradas (cache)',
                transfer_users: cached_transfer_users
            }
        }
    }
    const { status: tr_status, message: tr_message, payload: tr_payload } = await db_get_transfer_users(params);

    if(tr_status !== 200 || !tr_payload || !Array.isArray(tr_payload)) {
        return {
            status: tr_status,
            json: {
                message: tr_message,
                transfer_users: null
            }
        }
    }
    await cache.set(cache_key, tr_payload, 60 * 60 * 24 * 1);
    return {
        status: tr_status,
        json: {
            message: tr_message,
            transfer_users: tr_payload
        }
    }
}

export default get_transfer_users;