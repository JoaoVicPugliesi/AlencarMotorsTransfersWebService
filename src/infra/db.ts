import DB from "../domain/services/db/DB.js";
import Supabase from "./instances/supabase/supabase.js";

const db: DB = new Supabase();

export default db;