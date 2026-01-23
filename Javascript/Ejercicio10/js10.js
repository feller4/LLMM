// 1 y 2 - Máximo
function max(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

function maxOfThree(a, b, c) {
    return max(max(a, b), c);
}

function mostrarMax() {
    var a = Number(n1.value);
    var b = Number(n2.value);
    var c = Number(n3.value);
    resMax.innerHTML = "Máximo: " + maxOfThree(a, b, c);
}

// 3 - Vocal
function esVocal(letra) {
    return "aeiouAEIOU".includes(letra);
}

function comprobarVocal() {
    resVocal.innerHTML = esVocal(letra.value);
}

// 4 - Rövarspråket
function translate(texto) {
    var resultado = "";
    var vocales = "aeiouAEIOU ";

    for (var i = 0; i < texto.length; i++) {
        var c = texto[i];
        if (!vocales.includes(c)) {
            resultado += c + "o" + c;
        } else {
            resultado += c;
        }
    }
    return resultado;
}

function traducir() {
    resRovar.innerHTML = translate(texto.value);
}

// 5 - Suma y multiplicar
function sum(arr) {
    var total = 0;
    for (var i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}

function multiply(arr) {
    var total = 1;
    for (var i = 0; i < arr.length; i++) {
        total *= arr[i];
    }
    return total;
}

function calcularArray() {
    var arr = numeros.value.split(",").map(Number);
    resArray.innerHTML =
        "Suma: " + sum(arr) + " | Multiplicación: " + multiply(arr);
}

// 6 - Reverse
function reverse(texto) {
    return texto.split("").reverse().join("");
}

function invertir() {
    resReverse.innerHTML = reverse(textoReverse.value);
}

// 7, 8, 9 - Palabras
function procesarPalabras() {
    var arr = palabras.value.split(",");
    var num = Number(longitud.value);

    var ordenadas = arr.sort();
    var masLarga = arr.reduce((a, b) => a.length > b.length ? a : b);
    var filtradas = arr.filter(p => p.length > num);

    resPalabras.innerHTML =
        "Ordenadas: " + ordenadas +
        "<br>Más larga: " + masLarga.length +
        "<br>Filtradas: " + filtradas;
}

// 10 - Frecuencia
function charFreq(texto) {
    var obj = {};
    for (var i = 0; i < texto.length; i++) {
        var c = texto[i];
        if (obj[c]) {
            obj[c]++;
        } else {
            obj[c] = 1;
        }
    }
    return JSON.stringify(obj);
}

function frecuencia() {
    resFreq.innerHTML = charFreq(freqTexto.value);
}
