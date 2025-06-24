document.getElementById("btnPerfil").addEventListener("click", function () {
  window.location.href = "../perfil_Usuario/index.html";
});

document.addEventListener('DOMContentLoaded', () => {
  const btnSair = document.getElementById('btnSair');

  btnSair.addEventListener('click', () => {
    // Redireciona para a página de login
    window.location.href = '../login/index.html';   // ajuste o caminho se necessário
  });
});
