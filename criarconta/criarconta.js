document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("btnCriarConta").addEventListener("click", function (event) {
    event.preventDefault(); // impede comportamento padrão

    const campos = document.querySelectorAll("input");
    let tudoPreenchido = true;

    campos.forEach(campo => {
      if (campo.value.trim() === "") {
        tudoPreenchido = false;
      }
    });

    if (!tudoPreenchido) {
      alert("Por favor, preencha todos os campos obrigatórios.");
    } else {
      alert("Conta criada com sucesso! Faça login para continuar.");
      window.location.href = "../login/index.html";
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const btnCriar = document.getElementById('btnCriar');

  btnCriar.addEventListener('click', (e) => {
    e.preventDefault(); // evita que o formulário seja enviado (caso esteja dentro de um <form>)

    // Aqui você pode adicionar lógica de validação ou salvar a conta

    // Redireciona para a página de login
    window.location.href = '../login/index.html'; // ajuste o caminho conforme sua estrutura
  });
});
