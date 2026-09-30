import Transfer from "../../../../domain/entitities/transfer/Transfer.js";
import User from "../../../../domain/entitities/user/User.js";

interface Get_Transfer_Users_DTO_Request extends Pick<User, 'id'> {}

interface Get_Transfers_DTO_Request extends Pick<User, 'id'> {}

interface Get_Transfers_Param {
    transfers_id: string[]
}

interface Get_Transfers_DTO_Response {
    status: number,
    json: {
        message: string,
        transfers: Transfer[] | null
    }
}

export { Get_Transfers_DTO_Request, Get_Transfers_DTO_Response, Get_Transfers_Param, Get_Transfer_Users_DTO_Request };