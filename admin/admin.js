  document.getElementById("btnCadastrar").addEventListener("click", function () {
    window.location.href = "../cadoficinas/index.html";
  });

  document.getElementById("btnPerfil").addEventListener("click", function () {
    // Exemplo: redirecionar para uma futura página de perfil do admin
    window.location.href = "../perfil_admin/index.html";
  });

  document.getElementById("btnUsuarios").addEventListener("click", function () {
    // Exemplo: redirecionar para a página de gerenciamento de usuários
    window.location.href = "../usuarios/index.html";
  });

  document.getElementById("btnCronograma").addEventListener("click", function () {
    // Exemplo: redirecionar para o cronograma
    window.location.href = "../cronograma/index.html";
  });

  document.addEventListener('DOMContentLoaded', () => {
  const btnSair = document.getElementById('btnSair');

  btnSair.addEventListener('click', () => {
    // Redireciona para a página de login
    window.location.href = '../login/index.html';   // ajuste o caminho se necessário
  });
});


