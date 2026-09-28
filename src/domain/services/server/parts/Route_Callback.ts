import Request_Callback from "./Request_Callback.js";
import Response_Callback from "./Response_Callback.js";

type Route_Callback<
    TBody = unknown,
    TParams = unknown,
    TQuery = unknown
> = (
    request: Request_Callback<TBody, TParams, TQuery>,
    response: Response_Callback
) => Promise<void>;

export default Route_Callback;