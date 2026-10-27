import db_post_observation from "../../../../infra/use_cases/observations/db_post_observation.js";
async function post_observation(params) {
    const observation = await db_post_observation(params);
    const { status, message } = observation;
    if (status !== 201) {
        return {
            status: status,
            json: {
                message: message
            }
        };
    }
    return {
        status: status,
        json: {
            message: message
        }
    };
}
export default post_observation;
