// src/lib/supabaseClient.js
import { createClient } from '@supabase/supabase-js'


// Replace these with your actual credentials from Supabase settings
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// src/lib/supabaseClient.js
console.log('SUPABASE URL:', import.meta.env);
// console.log('SUPABASE KEY:', import.meta.env.VITE_SUPABASE_ANON_KEY);


export const supabase = createClient(supabaseUrl, supabaseAnonKey);
