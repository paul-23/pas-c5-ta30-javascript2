actualizarReloj();
function actualizarReloj() {
    var fecha = new Date();
    var horas = fecha.getHours();
    var minutos = fecha.getMinutes();
    var segundos = fecha.getSeconds();
  
    // Agregamos un cero delante si la hora, minutos o segundos son menores a 10
    horas = horas < 10 ? "0" + horas : horas;
    minutos = minutos < 10 ? "0" + minutos : minutos;
    segundos = segundos < 10 ? "0" + segundos : segundos;
  
    // Actualizamos el contenido de los spans con las nuevas cifras
    document.querySelector(".hora").textContent = horas;
    document.querySelector(".minuto").textContent = minutos;
    document.querySelector(".segundo").textContent = segundos;
  }
  
  // Ejecutamos la función para actualizar el reloj cada segundo
  setInterval(actualizarReloj, 1000);
  