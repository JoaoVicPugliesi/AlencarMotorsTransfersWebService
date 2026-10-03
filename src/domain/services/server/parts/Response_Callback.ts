interface Response_Callback {
    status(code: number): Response_Callback;
    json(data: unknown): void;

    hijack(): void;
    raw: {
        writeHead(
            statusCode: number,
            headers?: Record<string, string>
        ): void;

        write(data: string): boolean;

        on(
            event: string,
            callback: (...args: unknown[]) => void
        ): void;
    };
}

export default Response_Callback;