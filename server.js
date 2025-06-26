// Importa el framework Express (permite crear un servidor web fácilmente)
const express = require('express');

// Importa el módulo path de Node.js (sirve para construir rutas de archivos compatibles con cualquier sistema operativo)
const path = require('path');

// Crea una instancia de la aplicación Express
const app = express();

// Middleware de Express para servir archivos estáticos desde la carpeta "public"
// Esto permite acceder directamente a archivos HTML, CSS, JS, imágenes, etc.
app.use(express.static(path.join(__dirname, 'public')));

// Ruta para la página principal ("/")
// Cuando un usuario accede a http://localhost:3000/, se envía el archivo index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Ruta para la página de contacto ("/contacto")
// Cuando un usuario accede a http://localhost:3000/contacto, se envía contacto.html
app.get('/contacto', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'contacto.html'));
});

// Puerto donde se ejecuta el servidor
const PORT = 3000;

// Inicia el servidor y muestra un mensaje en la consola cuando está listo
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
