import Request_Callback from "../../../../domain/services/server/parts/Request_Callback.js";
import Response_Callback from "../../../../domain/services/server/parts/Response_Callback.js";
import validator from "../../../services/validator/validator.js";
import update_transfer from "./update_transfer.js";
import { Update_Transfer_DTO_Request, Update_Transfer_DTO_Response } from "./update_transfer_DTO.js";

async function update_transfer_caller(req: Request_Callback<
    Update_Transfer_DTO_Request,
    unknown,
    unknown
>, res: Response_Callback) {
    const params = req.body;
    const is_valid = validator.update_transfer(params);
    if (is_valid.success) {
        const response: Update_Transfer_DTO_Response = await update_transfer(params);
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

export default update_transfer_caller;