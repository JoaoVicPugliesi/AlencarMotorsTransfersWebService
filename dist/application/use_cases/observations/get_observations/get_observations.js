import db_get_observations from "../../../../infra/use_cases/observations/db_get_observations.js";
async function get_observations(params) {
    const observations = await db_get_observations(params);
    const { status, message, payload } = observations;
    if (status !== 200 || !payload || !Array.isArray(payload)) {
        return {
            status: status,
            json: {
                message: message,
                observations: null
            }
        };
    }
    return {
        status: status,
        json: {
            message: message,
            observations: payload
        }
    };
}
export default get_observations;
