import 'dotenv/config';

const REDIS_USERNAME: string = String(process.env.REDIS_USERNAME);
const REDIS_PASSWORD: string = String(process.env.REDIS_PASSWORD);
const REDIS_HOST: string = String(process.env.REDIS_HOST);
const REDIS_PORT: number = Number(process.env.REDIS_PORT);

export {REDIS_USERNAME, REDIS_PASSWORD, REDIS_HOST, REDIS_PORT}