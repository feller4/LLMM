var imagenes = [
    "imagenes/coche1.jpg",
    "imagenes/coche2.jpg",
    "imagenes/coche3.jpg"
];

var indice = 0;

// Mostrar la primera imagen al cargar
document.getElementById("slider").style.backgroundImage =
    "url('" + imagenes[indice] + "')";

function siguiente() {
    indice++;
    if (indice >= imagenes.length) {
        indice = 0;
    }
    actualizarImagen();
}

function anterior() {
    indice--;
    if (indice < 0) {
        indice = imagenes.length - 1;
    }
    actualizarImagen();
}

function actualizarImagen() {
    document.getElementById("slider").style.backgroundImage =
        "url('" + imagenes[indice] + "')";
}
