import Observation_Status from "./Observation_Status.js";

interface Observation {
    id: string,
    transfe_id: string,
    title: string,
    description: string,
    initial_date: unknown,
    term_date: unknown,
    final_date: unknown,
    status: Observation_Status
}

export default Observation;