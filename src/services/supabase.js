import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://judtomxqebstqfwhowyr.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp1ZHRvbXhxZWJzdHFmd2hvd3lyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA1NzgyODIsImV4cCI6MjA3NjE1NDI4Mn0.9SfuFO5wr-_An3lnNRh_KFAEfsBr8UUbMw6rQ5mfnbs";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
