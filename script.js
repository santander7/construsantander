// ===============================================
// BOTÓN HAMBURGUESA - ABRIR / CERRAR MENÚ LATERAL
// ===============================================

const hamburguesa = document.querySelector(".hamburguesa");
const menuMovil = document.querySelector(".menu-movil");

hamburguesa.addEventListener("click", () => {
  menuMovil.classList.toggle("activo");
});


// ===============================================
// SUBMENÚS EN MÓVIL
// (solo se abren cuando la pantalla es <= 768px)
// ===============================================

document.querySelectorAll(".dropdown").forEach(drop => {
  drop.addEventListener("click", (e) => {
    if (window.innerWidth <= 768) {
      e.preventDefault();

      const submenu = drop.querySelector(".submenu");

      // Cierra otros submenús
      document.querySelectorAll(".submenu.activo").forEach(open => {
        if (open !== submenu) open.classList.remove("activo");
      });

      // Alterna el submenú actual
      submenu.classList.toggle("activo");
    }
  });
});


// ===============================================
// OPCIONAL: CERRAR SUBMENÚ AL REDIMENSIONAR A PC
// ===============================================

window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    document.querySelectorAll(".submenu").forEach(s => s.classList.remove("activo"));
    menuMovil.classList.remove("activo");
  }
});
