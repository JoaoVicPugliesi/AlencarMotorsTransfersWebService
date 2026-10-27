interface Cache {
    connect(): Promise<unknown>;
    set<T>(key: string, value: T, ttl?: number): Promise<void>;
    get<T>(key: string): Promise<T | null>;
    delete(key: string): Promise<void>;
    has(key: string): Promise<boolean>;
}


export default Cache;