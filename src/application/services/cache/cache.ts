import Cache from "../../../domain/services/cache/Cache.js";
import Redis from "../../../domain/services/cache/instances/redis/redis.js";

const cache: Cache = new Redis();
cache.connect();
export default cache;