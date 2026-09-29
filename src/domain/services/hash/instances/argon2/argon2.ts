import argon2 from 'argon2';
import Hash_Error_Response from '../../parts/Hash_Error_Response.js';
import Hash from '../../Hash.js';
import Hash_Password from '../../parts/Hash_Password.js';
import Verify_Password from '../../parts/Verify_Password.js';

class Argon2 implements Hash {
    private argon2;
    constructor() {
        this.argon2 = argon2;
    }
    async hash_password(params: Hash_Password): Promise<string | Hash_Error_Response> {
        const { password } = params;
        if (!password) {
            return {
                status: 400,
                message: 'Senha precisa ser definida'
            }
        };
        try {
            return await this.argon2.hash(password, {
                type: argon2.argon2id,
                memoryCost: 65536,
                timeCost: 3,
                parallelism: 4
            })
        } catch (err) {
            return {
                status: 400,
                message: `Hash Falhou`
            }
        }
    }
    async verify_password(params: Verify_Password): Promise<boolean | Hash_Error_Response> {
        const { hash, password } = params;
        if (!hash || !password) {
            return {
                status: 400,
                message: 'Hash e Senha precisam ser definidos'
            }
        };
        try {
            return await this.argon2.verify(hash, password);
        } catch (err) {
            return {
                status: 422,
                message: `Verificação Falhou`
            }
        }
    }
}

export default Argon2;