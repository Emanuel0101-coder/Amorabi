const menuBtn = document.getElementById('menu-btn');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');

menuBtn.addEventListener('click', () => {
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');

    // Alternar ícone
    if (sidebar.classList.contains('active')) {
        menuBtn.innerHTML = '✖';
    } else {
        menuBtn.innerHTML = '&#9776;';
    }
});

// Clica no overlay para fechar
overlay.addEventListener('click', () => {
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
    menuBtn.innerHTML = '&#9776;';
});

document.addEventListener('DOMContentLoaded', () => {
  const tipoUsuario = localStorage.getItem('tipoUsuario');

  // Seta os botões de navegação conforme o tipo
  const homeLink = document.querySelector('.home-link');
  const setaLink = document.querySelector('.seta-link');

  if (tipoUsuario === 'admin') {
    homeLink.href = '../admin/index.html';
    setaLink.href = '../admin/index.html';
  } else {
    // Se não for admin, manda pra homepage de associados
    homeLink.href = '../homepage/index.html';
    setaLink.href = '../homepage/index.html';
  }
});
