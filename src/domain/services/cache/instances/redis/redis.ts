import Cache from "../../Cache.js";
import { createClient } from "redis";
import { REDIS_HOST, REDIS_PASSWORD, REDIS_PORT, REDIS_USERNAME } from "./redis_variables.js";

class Redis implements Cache {
    private client;
    constructor() {
        this.client = createClient({
            username: REDIS_USERNAME,
            password: REDIS_PASSWORD,
            socket: {
                host: REDIS_HOST,
                port: REDIS_PORT
            }
        });
    }
    public async connect() { await this.client.connect(); }
    public async set<T>(
        key: string,
        value: T,
        ttl?: number
    ): Promise<void> {
        const serialized = JSON.stringify(value);
        if (ttl !== undefined) {
            await this.client.set(key, serialized, {
                EX: ttl
            });
            return;
        }
        await this.client.set(key, serialized);
    }

    public async get<T>(key: string): Promise<T | null> {
        const value = await this.client.get(key);
        if (value === null) return null;
        return JSON.parse(value);
    }

    public async delete(key: string): Promise<void> {
        await this.client.del(key);
    }

    public async has(key: string): Promise<boolean> {
        return (await this.client.exists(key)) === 1;
    }
}

export default Redis;