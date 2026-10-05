import Transfer from "../../../../domain/entitities/transfer/Transfer.js";
import Transfer_Users from "../../../../domain/entitities/transfer/Transfer_Users.js";

interface Get_Transfer_Users_DTO_Request extends Pick<Transfer, 'id'> {}

interface Get_Transfer_Users_DTO_Response {
    status: number,
    json: {
        message: string,
        transfer_users: Transfer_Users[] | null
    }
}

export { Get_Transfer_Users_DTO_Request, Get_Transfer_Users_DTO_Response };