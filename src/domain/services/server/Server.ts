import Crud_Operations from "./parts/Crud_Operations.js";
import Listen_Params from "./parts/Listen_Params.js";
import Methods from "./parts/Methods.js";

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

export default Server;