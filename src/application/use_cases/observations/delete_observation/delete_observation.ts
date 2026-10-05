import User from "../../../../domain/entitities/user/User.js";
import DB_Response from "../../../../domain/services/db/parts/DB_Response.js";
import Hash_Error_Response from "../../../../domain/services/hash/parts/Hash_Error_Response.js";
import db_delete_observation from "../../../../infra/use_cases/observations/db_delete_observation.js";
import db_get_user from "../../../../infra/use_cases/users/db_get_user.js";
import hash from "../../../services/hash/hash.js";
import { Delete_Observation_DTO_Request, Delete_Observation_DTO_Response } from "./delete_observation_DTO.js";

async function delete_observation(params: Delete_Observation_DTO_Request): Promise<Delete_Observation_DTO_Response> {
    const { status: u_status, message: u_message, payload: u_payload }: DB_Response<User> = await db_get_user({
        username: params.username
    });
    if (u_status !== 200 || !u_payload || Array.isArray(u_payload)) {
        return {
            status: u_status,
            json: {
                message: u_message
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
            }
        };
    }

    if (!verified_password) {
        return {
            status: 401,
            json: {
                message: 'Senha incorreta',
            }
        };
    }

    const { status: ob_status, message: ob_message } = await db_delete_observation({
        observation_id: params.observation_id
    });

    if (ob_status !== 200) {
        return {
            status: ob_status,
            json: {
                message: ob_message
            }
        }
    }

    return {
        status: ob_status,
        json: {
            message: ob_message
        }
    }
}

export default delete_observation;