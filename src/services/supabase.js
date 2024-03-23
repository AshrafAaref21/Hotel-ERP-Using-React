import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://wsvobbzhmsiwkrggydgy.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indzdm9iYnpobXNpd2tyZ2d5ZGd5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA2ODA0NjEsImV4cCI6MjAyNjI1NjQ2MX0.7iGzsTxBDB9g9ozaQjr5PLW78V6_SQpJM4mzaKaa4rI";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
