import Hash from "../../domain/services/hash/Hash.js";
import Argon2 from "../../domain/services/hash/instances/argon2/argon2.js";

const hash: Hash = new Argon2();

export default hash;