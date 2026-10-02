import { Update_Profile_DTO_Request } from "../../../application/use_cases/users/update_profile/update_profile_DTO.js";
import User from "../../../domain/entitities/user/User.js";
import db from "../../db.js";

async function db_update_profile(params: Update_Profile_DTO_Request) {
    return await db.update_profile<User>(params);
}

export default db_update_profile;