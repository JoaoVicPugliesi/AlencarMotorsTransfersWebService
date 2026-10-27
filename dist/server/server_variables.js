import 'dotenv/config';
const CLIENT_ORIGIN = String(process.env.CLIENT_ORIGIN);
console.log(`ORIGIN: ${CLIENT_ORIGIN}`);
const SERVER_METHODS = String(process.env.SERVER_METHODS).split(',');
const SERVER_PORT = Number(process.env.SERVER_PORT);
const SERVER_HOST = String(process.env.SERVER_HOST);
const SERVER_ALLOWED_HEADERS = String(process.env.SERVER_ALLOWED_HEADERS).split(',');
export { CLIENT_ORIGIN, SERVER_METHODS, SERVER_PORT, SERVER_HOST, SERVER_ALLOWED_HEADERS };
