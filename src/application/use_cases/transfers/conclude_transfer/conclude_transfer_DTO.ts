import Transfer from "../../../../domain/entitities/transfer/Transfer.js";

interface Conclude_Transfer_DTO_Request extends Pick<Transfer, 'id' | 'final_date'> {
    username: string,
    password: string
}

interface Conclude_Transfer_DTO_Response {
    status: number,
    json: {
        message: string,
        transfer: Transfer | null
    }
}

export { Conclude_Transfer_DTO_Request, Conclude_Transfer_DTO_Response };