import Transfer from "../../../../domain/entitities/transfer/Transfer.js";
import DB_Response from "../../../../domain/services/db/parts/DB_Response.js";
import db_post_transfer from "../../../../infra/use_cases/transfers/db_post_transfer.js";
import db_post_transfer_users from "../../../../infra/use_cases/transfers/db_post_transfer_users.js";
import is_authorized from "../../../helpers/is_authorized/is_authorized.js";
import Is_Authorized_Response from "../../../helpers/is_authorized/is_authorized_response.js";
import { Post_Transfer_DTO_Request, Post_Transfer_DTO_Response } from "./post_transfer_DTO.js";

async function post_transfer (params: Post_Transfer_DTO_Request): Promise<Post_Transfer_DTO_Response> {
    const is_auth: Is_Authorized_Response = await is_authorized(params.created_by);
    if(!is_auth.is_authorized) {
        return {
            status: is_auth.status,
            json: {
                message: is_auth.message,
                transfer: null
            }
        }
    }
    const { name, plate, vehicle, code, initial_date, term_date, created_by, participants } = params;
    const transfer: DB_Response<Transfer> = await db_post_transfer({
        name,
        plate,
        vehicle,
        code,
        initial_date,
        term_date,
        created_by
    });

    const { status, message, payload } = transfer;
    if(status !== 201 || !payload || Array.isArray(payload)) {
        return {
            status: status,
            json: {
                message: message,
                transfer: null
            }
        }
    }
    const { id } = payload;
    participants.forEach( async (p) => {
        await db_post_transfer_users({
            user_id: p,
            transfer_id: id
        });
    });

    return {
        status: 201,
        json: {
            message: 'Transferência adicionada com sucesso',
            transfer: payload
        }
    }
}

export default post_transfer;