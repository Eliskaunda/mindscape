import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://vltebydbdjichcziqeee.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZsdGVieWRiZGppY2hjemlxZWVlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTYzOTY0OTcsImV4cCI6MjAxMTk3MjQ5N30.4TZGdKCjw6My4HdZlx9IE1IRx-k_jzjjoBmlABX3dnw";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
