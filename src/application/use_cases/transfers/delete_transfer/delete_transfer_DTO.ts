import Transfer from "../../../../domain/entitities/transfer/Transfer.js";
import User from "../../../../domain/entitities/user/User.js";

interface Delete_Transfer_DTO_Request {
    user_id: Pick<User, 'id'>;
    password: Pick<User, 'password'>
    transfer_id: Pick<Transfer, 'id'>;
}

interface Delete_Transfer_DTO_Response {
    status: number,
    json: {
        message: string
    }
}

export { Delete_Transfer_DTO_Request, Delete_Transfer_DTO_Response };