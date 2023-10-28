function selectSection(sectionId) {
  const navLinks = document.querySelectorAll(".navegacion .links li a");
  navLinks.forEach((link) => link.classList.remove("selected"));

  // Marcar el enlace correspondiente al hacer clic en el menú principal
  const selectedLink = document.querySelector(`.navegacion .links li#${sectionId} a`);
  selectedLink.classList.add("selected");

  // Marcar el enlace correspondiente al hacer clic en el menú desplegable
  const dropdownLinks = document.querySelectorAll(".dropdown_menu ul li a");
  dropdownLinks.forEach((link) => link.classList.remove("selected"));

  const selectedDropdownLink = document.querySelector(`.dropdown_menu ul li#${sectionId} a`);
  selectedDropdownLink.classList.add("selected");

  // Marcar la sección correspondiente
  const sections = document.querySelectorAll("section");
  sections.forEach((section) => section.classList.remove("selected-section"));

  const selectedSection = document.getElementById(sectionId);
  selectedSection.classList.add("selected-section");
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
