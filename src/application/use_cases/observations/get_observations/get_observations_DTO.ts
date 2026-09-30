import Observation from "../../../../domain/entitities/observation/Observation.js";
import Transfer from "../../../../domain/entitities/transfer/Transfer.js";

interface Get_Observations_DTO_Request extends Pick<Transfer, 'id'> {};

interface Get_Observations_DTO_Response {
    status: number,
    json: {
        message: string,
        observations: Observation[] | null
    }
}

export { Get_Observations_DTO_Request, Get_Observations_DTO_Response };