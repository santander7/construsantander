// sencillo toggle para menú móvil
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('.hamburguesa');
  const menuMovil = document.querySelector('.menu-movil') || document.querySelector('.menu');

  if (!btn || !menuMovil) return;

  btn.addEventListener('click', () => {
    menuMovil.classList.toggle('activo');
    document.body.classList.toggle('menu-open'); // opcional: evitar scroll de fondo
  });

  // Cerrar menú al click en enlace (mejor UX)
  menuMovil.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      menuMovil.classList.remove('activo');
      document.body.classList.remove('menu-open');
    });
  });

  // Opcional: cerrar al redimensionar a desktop
  window.addEventListener('resize', () => {
    if (window.innerWidth > 820) {
      menuMovil.classList.remove('activo');
      document.body.classList.remove('menu-open');
    }
  });
});
