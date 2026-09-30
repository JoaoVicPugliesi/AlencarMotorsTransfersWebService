import Transfer from "../../../../domain/entitities/transfer/Transfer.js";

interface Get_Transfer_DTO_Request extends Pick<Transfer, 'id'> {}

interface Get_Transfer_DTO_Response {
    status: number,
    json: {
        message: string,
        transfer: Transfer | null
    }
}

export { Get_Transfer_DTO_Request, Get_Transfer_DTO_Response }