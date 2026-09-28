interface Request_Callback<
    TBody = unknown,
    TParams = unknown,
    TQuery = unknown 
> {
    body: TBody;
    params: TParams;
    query: TQuery;
}

export default Request_Callback;