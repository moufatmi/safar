import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://bamhfskamsaebzurzymf.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJhbWhmc2thbXNhZWJ6dXJ6eW1mIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE5MTgyODQsImV4cCI6MjA2NzQ5NDI4NH0.Mo5JiGb0fCXIlFAKCWzACQ7_p65BmYV5SEPPIvRzJCg';
 
export const supabase = createClient(supabaseUrl, supabaseAnonKey); 