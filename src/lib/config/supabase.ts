import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://tdqsbovczohbmxijcrye.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRkcXNib3Zjem9oYm14aWpjcnllIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDAyNzkzMjQsImV4cCI6MjAxNTg1NTMyNH0.KtYDqIn_r8rzonYsc60em9PkFftgMXobZzsy7Y-BLD4';
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
