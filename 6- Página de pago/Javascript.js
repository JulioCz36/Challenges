const select = document.querySelector('#select');
const opciones = document.querySelector('#opciones');
const contenidoSelect = document.querySelector("#select .contenido-select");
const hiddenInput = document.querySelector("#inputSelect");

document.querySelectorAll("#opciones > .opcion").forEach((opcion) => {
  opcion.addEventListener("click", (e) => {
    e.preventDefault();
    contenidoSelect.innerHTML = e.currentTarget.innerHTML;
    select.classList.toggle("active");
    opciones.classList.toggle("active");
    hiddenInput.value = e.currentTarget.querySelector(".titulo").innerText;
  });
});

select.addEventListener("click", () => {
  select.classList.toggle("active");
  opciones.classList.toggle("active");
});

function selectCountry(country) {
  document.getElementById("inputSelect").value = country;
}

let numeroArticulo1 = 1;
let numeroArticulo2 = 1;
const precioBaseArticulo1 = 54.99;
const precioBaseArticulo2 = 74.99;
const shipping = 19;

function aumentarNumeroArticulo1() {
  numeroArticulo1++;
  actualizarNumeroArticulo1();
  actualizarPrecioTotal(); // Llama a esta función para actualizar el total
}

function disminuirNumeroArticulo1() {
  if (numeroArticulo1 > 0) {
    numeroArticulo1--;
    actualizarNumeroArticulo1();
    actualizarPrecioTotal(); // Llama a esta función para actualizar el total
  }
}

function aumentarNumeroArticulo2() {
  numeroArticulo2++;
  actualizarNumeroArticulo2();
  actualizarPrecioTotal(); // Llama a esta función para actualizar el total
}

function disminuirNumeroArticulo2() {
  if (numeroArticulo2 > 0) {
    numeroArticulo2--;
    actualizarNumeroArticulo2();
    actualizarPrecioTotal(); // Llama a esta función para actualizar el total
  }
}

function actualizarNumeroArticulo1() {
  document.querySelector('#numeroArticulo1').textContent = numeroArticulo1;
  return numeroArticulo1;
}

function actualizarNumeroArticulo2() {
  document.querySelector('#numeroArticulo2').textContent = numeroArticulo2;
  return numeroArticulo2;
}

function actualizarPrecioTotal() {
  const precio1 = numeroArticulo1 * precioBaseArticulo1;
  const precio2 = numeroArticulo2 * precioBaseArticulo2;
  const precioTotal = precio1 + precio2 + shipping;
  document.querySelector('#total-todo').textContent = `$${precioTotal.toFixed(2)}`;
}


function mostrarAlerta() {
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const name = document.getElementById('name').value;
  const address = document.getElementById('address').value;
  const city = document.getElementById('city').value;
  const contry = document.getElementById('inputSelect').value;
  const code = document.getElementById('code').value;

  if (email.trim() === '' || phone.trim() === '' || name.trim() === '' || address.trim() === ''
      || city.trim() === '' || contry.trim() === '' || code.trim() === '') {
      Swal.fire({
          title: 'Error!',
          text: 'Complete todos los campos del formulario',
          icon: 'error',
          confirmButtonText: 'OK'
      });
  } else {
    Swal.fire({
      title: 'Compra hecha!',
      text: 'Recibiras un email de seguimiento de envío',
      icon: 'success',
      confirmButtonText: 'OK',
  });
  }
}





  

