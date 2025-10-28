//replace supabasekey for real key and
import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://judtomxqebstqfwhowyr.supabase.co";
const supabaseKey = supabaseKey;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
