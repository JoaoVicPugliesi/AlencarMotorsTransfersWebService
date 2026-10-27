import db_get_observation from "../../../../infra/use_cases/observations/db_get_observation.js";
async function get_observation(params) {
    const observation = await db_get_observation({
        id: params.id
    });
    const { status, message, payload } = observation;
    if (status !== 200 || !payload || Array.isArray(payload)) {
        return {
            status: status,
            json: {
                message: message,
                observation: null
            }
        };
    }
    return {
        status: status,
        json: {
            message: message,
            observation: payload
        }
    };
}
export default get_observation;
