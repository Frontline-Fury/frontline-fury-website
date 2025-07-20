


// supabaseClient.js
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://zsqfvtdoygorchmcfcrs.supabase.co";
const supabaseAnonKey  = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpzcWZ2dGRveWdvcmNobWNmY3JzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI4MDkzMzUsImV4cCI6MjA2ODM4NTMzNX0.xr-lLJLRV7WNtzw_ZEjoLjTQRGUgz7QPhkW1MZRgI6M";

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;

