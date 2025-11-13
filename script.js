// ---- MODAL SERVICIOS ----
function abrirServicio(tipo) {
  const modal = document.getElementById("modalServicios");
  const contenido = document.getElementById("contenidoServicio");
  const info = {
    venta: {
      titulo: "Venta de casas y lotes",
      descripcion: "En INMOBILIARIA & CONSTRUCTORA J.S te ayudamos a encontrar el espacio perfecto para tu hogar o inversión..."
    },
    construccion: {
      titulo: "Construcción personalizada",
      descripcion: "Diseñamos y construimos tu vivienda desde cero, adaptándonos a tus necesidades, estilo y presupuesto..."
    },
    diseno: {
      titulo: "Diseño arquitectónico",
      descripcion: "Ofrecemos servicios de diseño arquitectónico moderno y funcional, adaptado a cada tipo de terreno..."
    },
    asesoria: {
      titulo: "Asesoría inmobiliaria",
      descripcion: "Brindamos acompañamiento integral para quienes desean comprar, vender o invertir en bienes raíces..."
    }
  };

  contenido.innerHTML = `<h2>${info[tipo].titulo}</h2><p>${info[tipo].descripcion}</p>`;
  modal.style.display = "block";
}

function cerrarServicio() {
  document.getElementById("modalServicios").style.display = "none";
}

// ---- MODAL GALERÍA ----
function abrirGaleria(proyecto) {
  const contenedor = document.getElementById("contenedorImagenes");
  contenedor.innerHTML = "";
  let imagenes = [];

  switch (proyecto) {
    case "CASA MODERNA ESQUINERA":
      imagenes = ["C0.jpg", "C01.jpg", "C8.jpg", "C7.jpg", "C5.jpg", "C2.jpg", "Q8,1.jpg"];
      break;
    case "CASA CON LOS DISEÑOS MAS MODERNOS":
      imagenes = ["y1.jpg", "y2.jpg", "y3.jpg", "y4.jpg"];
      break;
    case "CASA MODERNA CON JACUZZI EN EL PATIO":
      imagenes = ["S1.jpg", "S2.jpg", "S5.jpg", "S3.jpg", "S4.jpg"];
      break;
    case "CASA MODERNA DE DOS PISOS":
      imagenes = ["Z1.jpg", "Q5.jpg", "Z2.jpg", "Z3.jpg", "Z4.jpg", "R6.jpg", "Q8.jpg"];
      break;
    case "CASA A GUSTO DE LOS CLIENTES":
      imagenes = ["l00.jpg", "l0.jpg", "l1.jpg", "l2.jpg", "l5.jpg", "l6.jpg"];
      break;
  }

  imagenes.forEach(src => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = proyecto;
    contenedor.appendChild(img);
  });

  document.getElementById("modalGaleria").style.display = "block";
}

function cerrarGaleria() {
  document.getElementById("modalGaleria").style.display = "none";
}

// ---- LIGHTBOX DE IMÁGENES ----
document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll('.proyecto img');
  if (images.length === 0) return;

  const lightbox = document.createElement('div');
  lightbox.classList.add('lightbox');
  const img = document.createElement('img');
  lightbox.appendChild(img);
  document.body.appendChild(lightbox);

  images.forEach(image => {
    image.addEventListener('click', () => {
      img.src = image.src;
      lightbox.classList.add('active');
    });
  });

  lightbox.addEventListener('click', e => {
    if (e.target !== img) {
      lightbox.classList.remove('active');
    }
  });
});
