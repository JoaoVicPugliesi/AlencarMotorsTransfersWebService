import Request_Callback from "../../../../domain/services/server/parts/Request_Callback.js";
import Response_Callback from "../../../../domain/services/server/parts/Response_Callback.js";
import validator from "../../../services/validator/validator.js";
import reactivate_transfer from "./reactivate_transfer.js";
import { Reactivate_Transfer_DTO_Request, Reactivate_Transfer_DTO_Response } from "./reactivate_transfer_DTO.js";

async function reactivate_transfer_caller(req: Request_Callback<
    Reactivate_Transfer_DTO_Request,
    unknown,
    unknown
>, res: Response_Callback) {
    const params = req.body;
    const is_valid = validator.reactivate_transfer(params);
    if (is_valid.success) {
        const response: Reactivate_Transfer_DTO_Response = await reactivate_transfer(params);
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

export default reactivate_transfer_caller;