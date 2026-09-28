import Route_Callback from "./Route_Callback.js";

interface Crud_Operations<
    TBody = unknown,
    TParams = unknown,
    TQuery = unknown
> {
    url: string;
    callback: Route_Callback<TBody, TParams, TQuery>;
}

export default Crud_Operations;