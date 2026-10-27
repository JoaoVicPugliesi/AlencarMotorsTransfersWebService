function zod_validation_handler(is_valid) {
    if (is_valid.success) {
        return {
            success: true,
            data: is_valid.data,
        };
    }
    return {
        success: false,
        error: {
            list: [
                {
                    errors: is_valid.error.issues.map((issue) => ({
                        path: issue.path.map(p => typeof p === 'symbol' ? p.toString() : p),
                        message: issue.message,
                        code: issue.code,
                    })),
                },
            ],
        },
    };
}
export default zod_validation_handler;
