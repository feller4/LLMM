var frases = [
    "La práctica hace al maestro.",
    "Nunca es tarde para aprender.",
    "El éxito es la suma de pequeños esfuerzos.",
    "Aprender a programar es aprender a pensar.",
    "La constancia es la clave del éxito."
];

function mostrarFrase() {
    var numeroAleatorio = Math.floor(Math.random() * frases.length);
    document.getElementById("frase").innerHTML = frases[numeroAleatorio];
}
