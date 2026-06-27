import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

/*
  // Temporary local debug (uncomment only during local development).
  // Do NOT commit real keys or log them in production.
  // console.log('VITE_SUPABASE_URL:', supabaseUrl ? supabaseUrl.slice(0,60) : 'undefined');
  // console.log('VITE_SUPABASE_ANON_KEY present:', !!supabaseAnonKey);
*/

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
