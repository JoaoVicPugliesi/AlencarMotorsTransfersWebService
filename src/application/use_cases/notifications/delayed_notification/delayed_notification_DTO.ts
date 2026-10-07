import Observation from "../../../../domain/entitities/observation/Observation.js"
import Transfer from "../../../../domain/entitities/transfer/Transfer.js"

interface Delayed_Notification_DTO_Request {
    id: string,
    mode: 'transfers' | 'observations'
}

interface Delayed_Notification_DTO_Response {
    status: number,
    json: {
        message: string,
        payload: Transfer | Observation | null
    }
}

export { Delayed_Notification_DTO_Request, Delayed_Notification_DTO_Response }