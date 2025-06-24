/* login.js */
document.addEventListener("DOMContentLoaded", () => {

  /* ▶ LISTA dos e-mails que são administradores  */
  const adminEmails = [
    "aspas@amorabi.com",
    "admin@amorabi.com.br",
    "pedro@amorabi.com",
    "emilly@amorabi.com",
  ];

  /* ▶ Clique no botão Entrar  */
  document.getElementById("btnEntrar").addEventListener("click", event => {
    event.preventDefault();

    const email = document.querySelector("input[placeholder='Insira seu e-mail ou telefone']").value.trim();
    const senha = document.querySelector("input[placeholder='Insira sua senha']").value.trim();

    if (!email || !senha) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    /* ▶ Decide destino  */
    const ehAdmin = adminEmails.includes(email.toLowerCase());

    /* (Opcional) Grava papel do usuário para outras páginas */
    localStorage.setItem("userRole", ehAdmin ? "admin" : "user");
    localStorage.setItem("userEmail", email);

    /* ▶ Redireciona  */
    window.location.href = ehAdmin
      ? "../admin/index.html"
      : "../homepage/index.html";
  });
});
