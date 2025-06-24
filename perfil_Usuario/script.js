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