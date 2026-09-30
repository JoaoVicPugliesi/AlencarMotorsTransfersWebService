import User from "../../../domain/entitities/user/User.js";
import db from "../../db.js";

async function db_get_users() {
    return await db.get_users<User>();
}

export default db_get_users;