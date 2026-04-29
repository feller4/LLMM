let num = 0;
let puntuacion = 0;
let xmlDoc;
let preguntas;
let segundos = 0;
let intervalo;

function iniciarTimer() {
    clearInterval(intervalo);
    segundos = 0;
    intervalo = setInterval(() => {
        segundos++;
        document.getElementById("timer").innerText = "⏱ Tiempo: " + segundos + "s";
    }, 1000);
}

function cargarXML(idioma) {
    num = 0;
    puntuacion = 0;

    iniciarTimer();

    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        xmlDoc = this.responseXML;
        preguntas = xmlDoc.getElementsByTagName("question");
        mostrarPregunta();
    };

    xhttp.open("GET", idioma === "es" ? "preguntas_es.xml" : "preguntas_en.xml");
    xhttp.send();
}

function mostrarPregunta() {
    actualizarProgreso();

    let q = preguntas[num];
    let texto = q.getElementsByTagName("wording")[0].textContent;
    let choices = q.getElementsByTagName("choice");

    let html = `<h2>${texto}</h2>`;

    for (let i = 0; i < choices.length; i++) {
        html += `<button onclick="comprobar(this, ${i})">${choices[i].textContent}</button>`;
    }

    document.getElementById("quiz").innerHTML = html;
}

function comprobar(btn, i) {
    let choices = preguntas[num].getElementsByTagName("choice");
    let correcta = choices[i].getAttribute("correct");

    if (correcta === "yes") {
        puntuacion++;
        btn.classList.add("correct");
    } else {
        btn.classList.add("incorrect");

        // marcar la correcta
        for (let j = 0; j < choices.length; j++) {
            if (choices[j].getAttribute("correct") === "yes") {
                document.querySelectorAll("#quiz button")[j].classList.add("correct");
            }
        }
    }

    setTimeout(() => {
        num++;
        if (num < preguntas.length) {
            mostrarPregunta();
        } else {
            finalizar();
        }
    }, 800);
}

function actualizarProgreso() {
    let porcentaje = (num / preguntas.length) * 100;
    document.getElementById("progress-bar").style.width = porcentaje + "%";
}

function finalizar() {
    clearInterval(intervalo);

    document.getElementById("quiz").innerHTML = "";
    document.getElementById("resultado").innerHTML =
        `🏆 Resultado: ${puntuacion}/${preguntas.length} <br> ⏱ Tiempo: ${segundos}s`;
}
