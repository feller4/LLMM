function agregar(valor) {
    document.getElementById("pantalla").value += valor;
}

function limpiar() {
    document.getElementById("pantalla").value = "";
}

function calcular() {
    var expresion = document.getElementById("pantalla").value;
    var resultado = eval(expresion);
    document.getElementById("pantalla").value = resultado;
}
