import z from "zod";
import Validator from "../../Validator.js";

class Zod implements Validator {
    private zod: typeof z;

    constructor () {
        this.zod = z;
    }
}

export default Zod;