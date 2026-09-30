import Request_Callback from "../../../../domain/services/server/parts/Request_Callback.js";
import Response_Callback from "../../../../domain/services/server/parts/Response_Callback.js";
import validator from "../../../services/validator/validator.js";
import get_transfer from "./get_transfer.js";
import { Get_Transfer_DTO_Request, Get_Transfer_DTO_Response } from "./get_transfer_DTO.js";

async function get_transfer_caller(req: Request_Callback<
    unknown,
    unknown,
    Get_Transfer_DTO_Request
>, res: Response_Callback) {
    const params = req.query;
    const is_valid = validator.get_transfer(params);

    if (is_valid.success) {
        const response: Get_Transfer_DTO_Response = await get_transfer(params);
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

export default get_transfer_caller;