import Transfer_Status from "./Transfer_Status.js";

interface Transfer {
    id: string,
    name: string,
    plate: string,
    vehicle: string,
    code: string,
    status: Transfer_Status,
    initial_date: unknown,
    term_date: unknown,
    final_date: unknown | null,
    created_by: string
}

export default Transfer;