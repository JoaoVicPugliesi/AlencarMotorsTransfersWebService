import db_get_transfer_users from "../../../../infra/use_cases/transfers/db_get_transfer_users.js";
import { Get_Transfer_Users_DTO_Request, Get_Transfer_Users_DTO_Response } from "./get_transfer_users_DTO.js";

async function get_transfer_users (params: Get_Transfer_Users_DTO_Request): Promise<Get_Transfer_Users_DTO_Response> {
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

    return {
        status: tr_status,
        json: {
            message: tr_message,
            transfer_users: tr_payload
        }
    }
}

export default get_transfer_users;