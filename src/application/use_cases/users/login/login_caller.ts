import Request_Callback from "../../../../domain/services/server/parts/Request_Callback.js";
import Response_Callback from "../../../../domain/services/server/parts/Response_Callback.js";
import validator from "../../../services/validator/validator.js";
import login from "./login.js";
import { Login_DTO_Request, Login_DTO_Response } from "./login_DTO.js";

async function login_caller(req: Request_Callback<
    Login_DTO_Request,
    unknown,
    unknown
>, res: Response_Callback) {
    const params = req.body;
    const is_valid = validator.login(params);

    if (is_valid.success) {
        const response: Login_DTO_Response = await login(params);
        res.status(response.status);
        res.json(response.json);
        return;
    }

    const { list } = is_valid.error;
    res.status(422),
        res.json({
            message: list[0].errors[0].message,
            customers: null
        });
    return;
}

export default login_caller;