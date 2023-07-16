import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://sjtuczjgbgcqwisikedf.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNqdHVjempnYmdjcXdpc2lrZWRmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODkwOTI5MzQsImV4cCI6MjAwNDY2ODkzNH0.3i1iNqR9qn2VVWc0kq04CtcuGskon_zCfkIijiNqhoQ";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
