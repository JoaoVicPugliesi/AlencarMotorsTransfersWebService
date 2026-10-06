import Transfer from "../../../../domain/entitities/transfer/Transfer.js";

interface Delay_Transfer_DTO_Request extends Pick<Transfer, 'id'> {}

interface Delay_Transfer_DTO_Response {
    status: number,
    json: {
        message: string
    }
}

export { Delay_Transfer_DTO_Request, Delay_Transfer_DTO_Response };