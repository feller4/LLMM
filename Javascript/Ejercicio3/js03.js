function cambiarCoche(ruta) {
    if (ruta !== "") {
        document.getElementById("imagenCoche").src = ruta;
    }
}

function cambiarSpiderman(ruta) {
    if (ruta !== "") {
        document.getElementById("imagenSpiderman").src = ruta;
    }
}

function cambiarEstilo(archivo) {
    document.getElementById("estilo").href = archivo;
}
