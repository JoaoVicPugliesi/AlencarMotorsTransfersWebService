import db_update_profile from "../../../../infra/use_cases/users/db_update_profile.js";
import { Update_Profile_DTO_Request, Update_Profile_DTO_Response } from "./update_profile_DTO.js";

async function update_profile (params: Update_Profile_DTO_Request): Promise<Update_Profile_DTO_Response> {
    const { status: up_status, message: up_message, payload: up_payload} = await db_update_profile(params);

    if(up_status !== 200 || !up_payload || Array.isArray(up_payload)) {
        return {
            status: up_status,
            json: {
                message: up_message,
                user: null
            }
        }
    }

    return {
        status: up_status,
        json: {
            message: up_message,
            user: up_payload
        }
    }
}

export default update_profile;