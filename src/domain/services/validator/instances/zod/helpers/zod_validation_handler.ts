import z from "zod";
import { Validation_Result } from "../../../Validator.js";

function zod_validation_handler<T>(is_valid: z.ZodSafeParseResult<T>): Validation_Result<T> {
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
                        path: issue.path.map(p => typeof p === 'symbol' ? p.toString() : p) as (string | number)[],
                        message: issue.message,
                        code: issue.code,
                    })),
                },
            ],
        },
    };
}

export default zod_validation_handler;