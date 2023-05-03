// Definir un array para almacenar las apariciones de cada suma
// Solo puede ser de 2 a 12 ya que como mínimo sera 1+1 y másximo 6+6
const contadorSuma = new Array(11).fill(0);

// Realizamos los 36.000 lanzamientos de dos dados
for (let i = 0; i < 36000; i++) {
  // Obtener el resultado del lanzamiento de dos dados
  const dado1 = Math.floor(Math.random() * 6) + 1;
  const dado2 = Math.floor(Math.random() * 6) + 1;
  const sum = dado1 + dado2;
  
  // Incrementar el contador correspondiente a la suma obtenida
  contadorSuma[sum - 2]++;
}

// Mostrar los resultados
for (let i = 0; i < contadorSuma.length; i++) {
  console.log(`La suma ${i + 2} se ha obtenido ${contadorSuma[i]} veces`);
}