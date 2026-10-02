import Transfer from "../../../../domain/entitities/transfer/Transfer.js";

interface Reactivate_Transfer_DTO_Request extends Pick<Transfer, 'id' | 'term_date'> {
    username: string,
    password: string
}

interface Reactivate_Transfer_DTO_Response {
    status: number,
    json: {
        message: string,
        transfer: Transfer | null
    }
}

export { Reactivate_Transfer_DTO_Request, Reactivate_Transfer_DTO_Response };