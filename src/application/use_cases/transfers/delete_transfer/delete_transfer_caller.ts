import Request_Callback from "../../../../domain/services/server/parts/Request_Callback.js";
import Response_Callback from "../../../../domain/services/server/parts/Response_Callback.js";
import validator from "../../../services/validator/validator.js";
import delete_transfer from "./delete_transfer.js";
import { Delete_Transfer_DTO_Request, Delete_Transfer_DTO_Response } from "./delete_transfer_DTO.js";

async function delete_transfer_caller(req: Request_Callback<
    Delete_Transfer_DTO_Request,
    unknown,
    unknown
>, res: Response_Callback) {
    const params = req.body;
    const is_valid = validator.delete_transfer(params);

    if (is_valid.success) {
        const response: Delete_Transfer_DTO_Response = await delete_transfer(params);
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

export default delete_transfer_caller;