document.write('<h3><strong>----- VALIDAR FECHA -----</strong></h3>');

/* Pasmos la fecha dentro de un texto */
let validar = validarFecha("Nací el 05/04/1982 en Donostia.");

/* Mostramos si es correcta o no por pantalla */
if (validar) {
    document.write('<p>La cadena ingresada contiene una fecha (dd/mm/aaaa)</p>');
} else {
    document.write('<p>La cadena ingresada <strong>NO</strong> contiene una fecha (dd/mm/aaaa)</p>');
}

/* Validamos que el texto pasado contiene una fecha XX/XX/XXXX */
function validarFecha(fecha) {
    document.write('<p>Se ingresó: "' + fecha + '"</p>');
    let arrayText = fecha.split(' ')
    for (i in arrayText) {
        if (/^([0-2][0-9]|3[0-1])(\/|-)(0[1-9]|1[0-2])\2(\d{4})$/.test(arrayText[i]))
            return true;
    }
    return false;
}


document.write('<h3>----- VALIDAR EMAIL -----</h3>');

/* Pasamos un email correcto */
let email = validarEmail("paul@mail.com");
/* Pasamos un email incorrecto */
let email2 = validarEmail("paul@nomail.coms");

/* Validamos el email */
function validarEmail(email) {
    document.write('<p>Se ingresó: "' + email + '"</p>');
    if (/^[\w\-\.\+]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9]{2,3}$/.test(email))
        document.write('<p>Formato de email correcto</p>');
    else
        document.write('<p>¡Formato de email INCORRECTO!</p>');
}

document.write('<h3>----- FUNCIÓN CON EXPRTESIONES REGULARES -----</h3>');

let text = escapeHTML("& ' < >");

/* Función utilizando expresiones regulares */
function escapeHTML(text) {
    document.write('<p>Se ingresó: "<' + text + '"</p>');
    const replacements = [["&", "samp;"], ["'", "squot;"], ["<", "&lt;"], [">", "sgt;"]];
    for (var i = 0; i < replacements.length; i++) {
        text = text.replace(new RegExp(replacements[i][0], 'g'), replacements[i][1]);
    }
    document.write('<p>Texto con caracteres intercambiados: ' + text + '</p>');
}

document.write('<h3>----- INTERCAMBIO NOMBRE Y APELLIDO -----</h3>');

/* Pasamos el nombre de John Smith */
let input = "John Smith";

/* Mostramos el nombre que hemos introducido */
document.write('<p>Se ingresó: "' + input + '"</p>');

/* Comprobamos que contenga un nombre y un apellido y los intercambiamos */
if (/^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/.test(input)) {
    let array = input.split(' ');
    let output = '';
    for (let i = array.length - 1; i >= 0; i--) {
        if (i == array.length - 1)
            output = array[i] + ', ';
        else
            output += array[i];
    }
    document.write('<p>' + output + '</p>');
} else {
    document.write('<p>No se ingresó el siguiente formato "Nombre Apellido"</p>');
}

/* Eliminamos las estiquetas <script> dentro de un codigo html */
document.write('<h3>----- ELIMINAR SCRIPT DENTRO DE HTML -----</h3>');
const condicion = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;
const html = "<p>Este es un párrafo<script>alert('Si ves este mensaje no ha funcionado')</script> con un script.</p>";
const html_limpio = html.replace(condicion, "");
document.write(html_limpio);