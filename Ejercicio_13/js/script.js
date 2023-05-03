// Capturamos todos los párrafos del documento
var parrafos = document.getElementsByTagName("p");

// Creamos una función para mostrar un mensaje cuando se presione un párrafo
function mostrarMensaje() {
  console.log("Se presionó un párrafo del documento");
}

// Recorremos todos los párrafos y les agregamos un eventListener para el evento click
for (var i = 0; i < parrafos.length; i++) {
  parrafos[i].addEventListener("click", mostrarMensaje);
}

// Capturamos los párrafos de la segunda tabla
var parrafosTabla2 = document.querySelectorAll("table:nth-of-type(2) p");

// Creamos una función para mostrar un mensaje cuando se presione un párrafo de la segunda tabla
function mostrarMensajeTabla2() {
  console.log("Se presionó un párrafo contenido en la segunda tabla.");
}

// Recorremos los párrafos de la segunda tabla y les agregamos un eventListener para el evento click
for (var i = 0; i < parrafosTabla2.length; i++) {
  parrafosTabla2[i].addEventListener("click", mostrarMensajeTabla2);
}
