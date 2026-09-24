import { supabase } from './supabaseClient.js';

export async function checkAuth() {
  try {
    const { data: { session }, error } = await supabase.auth.getSession();

    if (error || !session) {
      window.location.replace('/login.html');
      return false;
    }

    return session;
  } catch (err) {
    console.error('Erro na verificação de sessão:', err);
    window.location.replace('/login.html');
    return false;
  }
}

// Executa o guardião de rota imediatamente ao importar
checkAuth();
