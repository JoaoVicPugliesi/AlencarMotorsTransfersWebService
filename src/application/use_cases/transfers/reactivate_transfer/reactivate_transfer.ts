import Transfer from "../../../../domain/entitities/transfer/Transfer.js";
import User from "../../../../domain/entitities/user/User.js";
import DB_Response from "../../../../domain/services/db/parts/DB_Response.js";
import Hash_Error_Response from "../../../../domain/services/hash/parts/Hash_Error_Response.js";
import db_reactivate_transfer from "../../../../infra/use_cases/transfers/db_reactivate_transfer.js";
import db_get_user from "../../../../infra/use_cases/users/db_get_user.js";
import hash from "../../../services/hash/hash.js";
import { Reactivate_Transfer_DTO_Request, Reactivate_Transfer_DTO_Response } from "./reactivate_transfer_DTO.js";

async function reactivate_transfer(params: Reactivate_Transfer_DTO_Request): Promise<Reactivate_Transfer_DTO_Response> {
    const { status: u_status, message: u_message, payload: u_payload }: DB_Response<User> = await db_get_user({
        username: params.username
    });
    if (u_status !== 200 || !u_payload || Array.isArray(u_payload)) {
        return {
            status: u_status,
            json: {
                message: u_message,
                transfer: null
            }
        }
    }
    const verified_password: boolean | Hash_Error_Response = await hash.verify_password({
        hash: u_payload.password,
        password: params.password
    });

    if (typeof verified_password !== 'boolean') {
        return {
            status: verified_password.status,
            json: {
                message: verified_password.message,
                transfer: null
            }
        };
    }

    if (!verified_password) {
        return {
            status: 401,
            json: {
                message: 'Senha incorreta',
                transfer: null
            }
        };
    }

    const reactivated: DB_Response<Transfer> = await db_reactivate_transfer(params);
    const { status: c_status, message: c_message, payload: c_payload } = reactivated;
    if (c_status !== 200 || !c_payload || Array.isArray(c_payload)) {
        return {
            status: c_status,
            json: {
                message: c_message,
                transfer: null
            }
        }
    }
    return {
        status: c_status,
        json: {
            message: c_message,
            transfer: c_payload
        }
    }
}

export default reactivate_transfer;