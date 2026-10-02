/* Conexión con Supabase. La "llave pública" es segura de exponer aquí:
   solo permite insertar filas (ver políticas de seguridad en supabase-setup.sql),
   no leer, editar ni borrar datos. */
const SUPABASE_URL = "https://PENDIENTE.supabase.co";
const SUPABASE_PUBLIC_KEY = "sb_publishable_-9vDmYzc_4gHOi3dHuiOOQ_AaAo0Bcr";

const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_PUBLIC_KEY);
