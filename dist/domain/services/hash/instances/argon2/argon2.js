import argon2 from 'argon2';
class Argon2 {
    argon2;
    constructor() {
        this.argon2 = argon2;
    }
    async hash_password(params) {
        const { password } = params;
        if (!password) {
            return {
                status: 400,
                message: 'Senha precisa ser definida'
            };
        }
        ;
        try {
            return await this.argon2.hash(password, {
                type: argon2.argon2id,
                memoryCost: 65536,
                timeCost: 3,
                parallelism: 4
            });
        }
        catch (err) {
            return {
                status: 400,
                message: `Hash Falhou`
            };
        }
    }
    async verify_password(params) {
        const { hash, password } = params;
        if (!hash || !password) {
            return {
                status: 400,
                message: 'Hash e Senha precisam ser definidos'
            };
        }
        ;
        try {
            return await this.argon2.verify(hash, password);
        }
        catch (err) {
            return {
                status: 422,
                message: `Verificação Falhou`
            };
        }
    }
}
export default Argon2;
