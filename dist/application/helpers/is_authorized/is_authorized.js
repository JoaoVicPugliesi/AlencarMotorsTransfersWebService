import db from "../../../infra/db.js";
async function is_authorized(username) {
    const user = await db.get_user({
        username: username
    });
    if (user.status === 404 || !user.payload || Array.isArray(user.payload)) {
        return {
            is_authorized: false,
            status: 401,
            message: 'Usuário não existe ou não está autenticado'
        };
    }
    ;
    const { role } = user.payload;
    if (role !== 'admin') {
        return {
            is_authorized: false,
            status: 403,
            message: 'Não autorizado'
        };
    }
    ;
    return {
        is_authorized: true,
        status: 200,
        message: 'Autorizado'
    };
}
export default is_authorized;
