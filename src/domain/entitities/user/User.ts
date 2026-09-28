import User_Role from "./User_Role.js";

interface User {
    id: string,
    username: string,
    password: string,
    role: User_Role
}

export default User;