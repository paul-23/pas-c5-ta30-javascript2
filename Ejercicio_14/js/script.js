//Variables globales
let currentNumber = '';
let previousNumber = '';
let operator = '';
let calculationFinished = false;

//Función para insertar un número
function insertNumber(number) {
    if (calculationFinished) {
        clearAll();
    }
    currentNumber += number;
    updateScreen(currentNumber);
}

//Función para insertar un operador
function insertOperator(op) {
    if (calculationFinished) {
        calculationFinished = false;
    }
    if (operator) {
        calculate();
    }
    operator = op;
    previousNumber = currentNumber;
    currentNumber = '';
}

//Función para calcular el resultado
function calculate() {
    let result;
    switch (operator) {
        case '+':
            result = parseFloat(previousNumber) + parseFloat(currentNumber);
            break;
        case '-':
            result = parseFloat(previousNumber) - parseFloat(currentNumber);
            break;
        case '*':
            result = parseFloat(previousNumber) * parseFloat(currentNumber);
            break;
        case '/':
            result = parseFloat(previousNumber) / parseFloat(currentNumber);
            break;
        case '%':
            result = parseFloat(previousNumber) % parseFloat(currentNumber);
            break;
        case '1/x':
            result = 1 / parseFloat(currentNumber);
            break;
        case 'sqrt':
            result = Math.sqrt(parseFloat(currentNumber));
            break;
        default:
            break;
    }
    currentNumber = result.toString();
    updateScreen(currentNumber);
    operator = '';
    previousNumber = '';
    calculationFinished = true;
}

//Función para actualizar la pantalla
function updateScreen(number) {
    document.getElementById('result').value = number;
}

//Función para borrar el último número ingresado
function clearPrevious() {
    currentNumber = currentNumber.slice(0, -1);
    updateScreen(currentNumber);
}

//Función para borrar todo
function clearAll() {
    currentNumber = '';
    previousNumber = '';
    operator = '';
    calculationFinished = false;
    updateScreen('0');
}

//Función para borrar la pantalla
function clearScreen() {
    currentNumber = '';
    updateScreen('0');
}

//Función para cambiar el signo del número
function toggleSign() {
    currentNumber = (parseFloat(currentNumber) * -1).toString();
    updateScreen(currentNumber);
}

//Función para insertar un punto decimal
function insertDecimal() {
    if (currentNumber.indexOf('.') === -1) {
        if (currentNumber === '') {
            currentNumber = '0';
        }
        currentNumber += '.';
        updateScreen(currentNumber);
    }
}

// Función para insertar valores por teclado
document.addEventListener("keydown", function (event) {
    if (event.key >= 0 && event.key <= 9) {
        insertNumber(parseInt(event.key));
    } else if (event.key === "+") {
        insertOperator("+");
    } else if (event.key === "-") {
        insertOperator("-");
    } else if (event.key === "*") {
        insertOperator("*");
    } else if (event.key === "/") {
        insertOperator("/");
    } else if (event.key === "Enter") {
        calculate();
    } else if (event.key === ".") {
        insertDecimal();
    } else if (event.key === "Backspace") {
        clearPrevious();
    } else if (event.key === "Escape") {
        clearScreen();
    } else if (event.key === "Delete") {
        clearScreen();
    }
});