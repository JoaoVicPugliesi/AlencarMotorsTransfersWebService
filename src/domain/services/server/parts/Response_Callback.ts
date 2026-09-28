interface Response_Callback {
    status(code: number): Response_Callback;
    json(data: unknown): void;
}

export default Response_Callback;