import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://judtomxqebstqfwhowyr.supabase.co";
const supabaseKey = "sb_publishable_UQ6llMWRWFWB56Un1BdwOQ_TeOJWn44";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
