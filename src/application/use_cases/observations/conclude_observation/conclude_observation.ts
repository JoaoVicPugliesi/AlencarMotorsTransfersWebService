import Observation from "../../../../domain/entitities/observation/Observation.js";
import User from "../../../../domain/entitities/user/User.js";
import DB_Response from "../../../../domain/services/db/parts/DB_Response.js";
import Hash_Error_Response from "../../../../domain/services/hash/parts/Hash_Error_Response.js";
import db_conclude_observation from "../../../../infra/use_cases/observations/db_conclude_observation.js";
import db_get_user from "../../../../infra/use_cases/users/db_get_user.js";
import hash from "../../../services/hash/hash.js";
import { Conclude_Observation_DTO_Request, Conclude_Observation_DTO_Response } from "./conclude_observation_DTO.js";

async function conclude_observation(params: Conclude_Observation_DTO_Request): Promise<Conclude_Observation_DTO_Response> {
    console.log(params);

    const { status: u_status, message: u_message, payload: u_payload }: DB_Response<User> = await db_get_user({
        username: params.username
    });
    console.log(u_payload);

    if (u_status !== 200 || !u_payload || Array.isArray(u_payload)) {
        return {
            status: u_status,
            json: {
                message: u_message,
                observation: null
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
                observation: null
            }
        };
    }

    if (!verified_password) {
        return {
            status: 401,
            json: {
                message: 'Senha incorreta',
                observation: null
            }
        };
    }
    const concluded: DB_Response<Observation> = await db_conclude_observation(params);
    const { status: c_status, message: c_message, payload: c_payload } = concluded;
    if (c_status !== 200 || !c_payload || Array.isArray(c_payload)) {
        return {
            status: c_status,
            json: {
                message: c_message,
                observation: null
            }
        }
    }

    return {
        status: c_status,
        json: {
            message: c_message,
            observation: c_payload
        }
    }
}

export default conclude_observation;