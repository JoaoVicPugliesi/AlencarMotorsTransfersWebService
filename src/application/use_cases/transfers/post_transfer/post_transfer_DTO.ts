import Transfer from "../../../../domain/entitities/transfer/Transfer.js";

interface Post_Transfer_DTO_Request extends Omit<Transfer, 'id' | 'final_date' | 'status'> {
    participants: string[]
}

interface Post_Transfer_DTO_Response {
    status: number,
    json: {
        message: string,
        transfer: Transfer | null
    }
}

export { Post_Transfer_DTO_Request, Post_Transfer_DTO_Response };