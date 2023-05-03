/* Al hacer clic sobre una imagen recibimos su ruta y su texto alternativo
   y lo substituimos por el actual en el centro */
function changeImage(imageSrc, altText) {
    document.getElementById("bigImage").src = imageSrc;
    document.getElementById("caption").innerHTML = altText;
}
