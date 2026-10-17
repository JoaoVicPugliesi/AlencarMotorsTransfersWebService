import db_post_transfer_users from "../../../../infra/use_cases/transfers/db_post_transfer_users.js";
import { Post_Transfer_Users_DTO_Request, Post_Transfer_Users_DTO_Response } from "./post_transfer_users_DTO.js";

async function post_transfer_users (params: Post_Transfer_Users_DTO_Request): Promise<Post_Transfer_Users_DTO_Response> {
    const { status, message } = await db_post_transfer_users(params);
    if(status !== 201) {
        return {
            status: status,
            json: {
                message: message
            }
        }
    }
    return {
        status: status,
        json: {
            message: message
        }
    }
}

export default post_transfer_users;