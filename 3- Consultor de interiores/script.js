let activeLink = null; // Variable para almacenar el enlace activo actualmente

function selectSection(sectionId) {
  const selectedLink = document.querySelector(`.navegacion .links li a[href="#${sectionId}"], .dropdown_menu ul li a[href="#${sectionId}"]`);
  const underline = document.querySelector(".underline");

  const textWidth = selectedLink.offsetWidth;
  const textLeft = selectedLink.offsetLeft;
  underline.style.width = `${textWidth}px`;
  underline.style.transform = `translateX(${textLeft}px)`; // Mover la línea al inicio del texto

  // Ocultar la línea subrayada si se selecciona otro enlace
  if (activeLink && activeLink !== selectedLink) {
    activeLink.classList.remove("selected");
    underline.classList.remove("active");
  }

  // Alternar el estado seleccionado del enlace actual
  if (selectedLink.classList.contains("selected")) {
    selectedLink.classList.remove("selected");
    underline.classList.remove("active");
    activeLink = null;
  } else {
    selectedLink.classList.add("selected");
    underline.classList.add("active");
    activeLink = selectedLink;
  }
}


let active = null; // Variable para almacenar el enlace activo actualmente

function select(sectionId) {
  const selectedLink = document.querySelector(`.dropdown_menu ul li a[href="#${sectionId}"]`);
  const underline = document.querySelector(".underline");

  const textWidth = selectedLink.offsetWidth;
  const textLeft = selectedLink.offsetLeft;
  underline.style.width = `${textWidth}px`;
  underline.style.transform = `translateX(${textLeft}px)`; // Mover la línea al inicio del texto

  // Ocultar la línea subrayada si se selecciona otro enlace
  if (active && active !== selectedLink) {
    active.classList.remove("selected");
    underline.classList.remove("active");
  }

  // Alternar el estado seleccionado del enlace actual
  if (selectedLink.classList.contains("selected")) {
    selectedLink.classList.remove("selected");
    underline.classList.remove("active");
    active = null;
  } else {
    selectedLink.classList.add("selected");
    underline.classList.add("active");
    active = selectedLink;
  }
}

function toggleNav() {
  const nav = document.querySelector(".dropdown_menu");
  const cerrado = document.querySelector(".cerrado");
  const abierto = document.querySelector(".abierto");
  const fondo = document.getElementById("main");

  if (nav.classList.contains('open')) {
    nav.classList.remove('open');
    cerrado.style.display = "none";
    abierto.style.display = "block";
    fondo.style.display = "block";
  } else {
    nav.classList.add('open');
    cerrado.style.display = "block";
    abierto.style.display = "none";
    fondo.style.display = "none";
  }
  
}
