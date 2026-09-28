type LISTEN_PARAMS = {
    port: number,
    host: string
}

interface Server {
    listen(params: LISTEN_PARAMS): Promise<unknown>;
    register(): Promise<void>
    run(): Promise<void>;
}

export default Server;