interface Request_Callback<
    TBody = unknown,
    TParams = unknown,
    TQuery = unknown 
> {
    body: TBody;
    params: TParams;
    query: TQuery;
}

interface Response_Callback {
    status(code: number): Response_Callback;
    json(data: unknown): void;
}

type Route_Callback<
    TBody = unknown,
    TParams = unknown,
    TQuery = unknown
> = (
    request: Request_Callback<TBody, TParams, TQuery>,
    response: Response_Callback
) => Promise<void>;


interface Crud_Operations<
    TBody = unknown,
    TParams = unknown,
    TQuery = unknown
> {
    url: string;
    callback: Route_Callback<TBody, TParams, TQuery>;
}

type Listen_Params = {
    port: number,
    host: string
}

type Methods = "get" | "post" | "patch" | "delete";

interface Server {
    listen(params: Listen_Params): Promise<unknown>;
    register(): Promise<void>
    run(): Promise<void>;
    operation(method: Methods, params: Crud_Operations<unknown, unknown, unknown>): void;
    get<TBody = unknown, TParams = unknown, TQuery = unknown>(params: Crud_Operations<TBody, TParams, TQuery>): Promise<void>;
    post<TBody = unknown, TParams = unknown, TQuery = unknown>(params: Crud_Operations<TBody, TParams, TQuery>): Promise<void>;
    update<TBody = unknown, TParams = unknown, TQuery = unknown>(params: Crud_Operations<TBody, TParams, TQuery>): Promise<void>;
    delete<TBody = unknown, TParams = unknown, TQuery = unknown>(params: Crud_Operations<TBody, TParams, TQuery>): Promise<void>;
}

export { Request_Callback, Response_Callback, Crud_Operations };
export default Server;