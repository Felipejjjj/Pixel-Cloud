import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL; // Sua URL do Supabase
const supabaseKey = process.env.SUPABASE_KEY; // Sua chave de API pública

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;