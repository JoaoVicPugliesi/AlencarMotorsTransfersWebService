import Hash_Error_Response from "./parts/Hash_Error_Response.js";
import Hash_Password from "./parts/Hash_Password.js";
import Verify_Password from "./parts/Verify_Password.js";

interface Hash {
    hash_password (params: Hash_Password): Promise<string | Hash_Error_Response>;
    verify_password (params: Verify_Password): Promise<boolean | Hash_Error_Response>;
}

export default Hash;