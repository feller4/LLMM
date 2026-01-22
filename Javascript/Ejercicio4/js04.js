// Ejemplo con texto
function mostrarTexto() {
    var mensaje = document.getElementById("texto").value;
    document.getElementById("resultadoTexto").innerHTML = mensaje;
}

// Ejemplo con números
function sumarNumeros() {
    var num1 = Number(document.getElementById("numero1").value);
    var num2 = Number(document.getElementById("numero2").value);
    var resultado = num1 + num2;

    document.getElementById("resultadoNumero").innerHTML =
        "La suma es: " + resultado;
}
