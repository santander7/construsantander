document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('.hamburguesa');
  const menuMovil = document.querySelector('.menu-desktop'); // ← SOLUCIÓN

  if (!btn || !menuMovil) return;

  btn.addEventListener('click', () => {
    menuMovil.classList.toggle('activo');
    document.body.classList.toggle('menu-open');
  });

  menuMovil.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      menuMovil.classList.remove('activo');
      document.body.classList.remove('menu-open');
    });
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 820) {
      menuMovil.classList.remove('activo');
      document.body.classList.remove('menu-open');
    }
  });
});
