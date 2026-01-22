<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 5</title>
</head>
<body>

    <h1>Ejercicio 5 – Básico</h1>

    <!-- a) CAMBIAR ESTILO DEL PÁRRAFO -->
    <h2>a) Cambiar estilo del párrafo</h2>

    <p id="parrafo">Este es un párrafo de ejemplo</p>

    <button onclick="fuenteArial()">Arial</button>
    <button onclick="fuenteVerdana()">Verdana</button>
    <button onclick="fuenteCourier()">Courier New</button>

    <hr>

    <!-- b) CAMBIAR IMAGEN (COCHES) -->
    <h2>b) Cambiar imagen (coches)</h2>

    <img id="imagen" src="imagenes/coche1.jpg" height="200"><br><br>

    <button onclick="cambiarImagen('imagenes/coche1.jpg')">Coche 1</button>
    <button onclick="cambiarImagen('imagenes/coche2.jpg')">Coche 2</button>
    <button onclick="cambiarImagen('imagenes/coche3.jpg')">Coche 3</button>

    <hr>

    <!-- c) MOSTRAR MENSAJES -->
    <h2>c) Mostrar mensajes</h2>

    <div id="mensaje" style="border:1px solid black; padding:10px;">
        Aquí aparecerá el mensaje
    </div>
    <br>

    <button onclick="mensaje1()">Mensaje 1</button>
    <button onclick="mensaje2()">Mensaje 2</button>
    <button onclick="mensaje3()">Mensaje 3</button>

    <script src="js05.js"></script>
</body>
</html>
