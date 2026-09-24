import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const supabaseUrl = (typeof import.meta !== 'undefined' && import.meta.env?.VITE_SUPABASE_URL) 
  || 'https://opvvbnhxxqmapkjgujro.supabase.co';
const supabaseAnonKey = (typeof import.meta !== 'undefined' && import.meta.env?.VITE_SUPABASE_ANON_KEY) 
  || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9wdnZibmh4eHFtYXBramd1anJvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODk3MTMzMjQsImV4cCI6MjEwNTI4OTMyNH0.aKEMPjWTBXfCdgvh7kL8rns_DNVt4KYCAFVuBFas5HA';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
