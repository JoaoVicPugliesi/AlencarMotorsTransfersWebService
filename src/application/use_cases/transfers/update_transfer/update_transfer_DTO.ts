import Transfer from "../../../../domain/entitities/transfer/Transfer.js";

interface Update_Transfer_DTO_Request extends Pick<Transfer, 'id' | 'name' | 'plate' | 'vehicle'> {}

interface Update_Transfer_DTO_Response {
    status: number,
    json: {
        message: string,
        transfer: Transfer | null
    }
}

export { Update_Transfer_DTO_Request, Update_Transfer_DTO_Response }