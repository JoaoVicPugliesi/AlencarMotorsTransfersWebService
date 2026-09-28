import 'dotenv/config';

const CLIENT_ORIGIN: string = String(process.env.CLIENT_ORIGIN);
const SERVER_METHODS: string[] = String(process.env.SERVER_METHODS).split(',');
const SERVER_PORT: number = Number(process.env.SERVER_PORT);
const SERVER_HOST: string = String(process.env.SERVER_HOST);
const SERVER_ALLOWED_HEADERS: string[] = String(process.env.SERVER_ALLOWED_HEADERS).split(',');

export { CLIENT_ORIGIN, SERVER_METHODS, SERVER_PORT, SERVER_HOST, SERVER_ALLOWED_HEADERS }