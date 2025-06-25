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

document.addEventListener('DOMContentLoaded', () => {
  // pega todos os botões com classe info-btn
  document.querySelectorAll('.info-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      // lê o valor do data-info
      const slug = btn.dataset.info;           // ex.: "excel"

      // monta a URL — ajuste o padrão se seus nomes de arquivo forem outros
      const url = `../Edicao/associados-${slug}.html`;

      // redireciona
      window.location.href = url;
    });
  });
});

// home.js  (executa quando o associado efetua login ou abre a home)
localStorage.setItem('tipoUsuario', 'associado');

document.getElementById('btnSair')?.addEventListener('click', () => {
  localStorage.removeItem('tipoUsuario');   // limpa o rastro
  window.location.href = '../login/index.html';       // ou para onde deseja
});

document.addEventListener('DOMContentLoaded', () => {
  const botoesInformacao = document.querySelectorAll('.oficina .mais');

  botoesInformacao.forEach((botao, index) => {
    botao.addEventListener('click', () => {
      // Neste exemplo, estamos assumindo que o botão 2 é do Excel
      if (index === 1) {
        window.location.href = '../Edicao/associados.html';
      }
      // Você pode adicionar mais condições aqui para outras oficinas
    });
  });
});

