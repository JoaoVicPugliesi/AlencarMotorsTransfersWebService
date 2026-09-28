import { Register_DTO_Request } from "../../../application/use_cases/users/register/register_DTO.js";
import User from "../../../domain/entitities/user/User.js";
import db from "../../db.js";

async function db_register(params: Register_DTO_Request) {
    return await db.register<User>(params);
}

export default db_register;