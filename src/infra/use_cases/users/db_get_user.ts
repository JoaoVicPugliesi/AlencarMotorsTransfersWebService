import User from "../../../domain/entitities/user/User.js";
import db from "../../db.js";

async function db_get_user(params: Pick<User, 'username'>) {
    return await db.get_user<User>(params);
}

export default db_get_user;