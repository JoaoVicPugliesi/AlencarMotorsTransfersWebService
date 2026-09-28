import Zod from "../../../domain/services/validator/instances/zod/zod.js";
import Validator from "../../../domain/services/validator/Validator.js";

const validator: Validator = new Zod();

export default validator;