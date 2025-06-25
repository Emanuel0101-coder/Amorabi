document.addEventListener('DOMContentLoaded', () => {
  const iconeHome = document.getElementById('icone-home');
  const iconeLogin = document.getElementById('icone-login');

  if (iconeHome) {
    iconeHome.style.cursor = 'pointer'; // só para indicar ao usuário que é clicável
    iconeHome.addEventListener('click', () => {
      window.location.href = '../homepage/index.html';
    });
  }

  if (iconeLogin) {
    iconeLogin.style.cursor = 'pointer';
    iconeLogin.addEventListener('click', () => {
      // Limpa a sessão, se necessário
      localStorage.removeItem('tipoUsuario');
      window.location.href = '../login/index.html';
    });
  }
});
