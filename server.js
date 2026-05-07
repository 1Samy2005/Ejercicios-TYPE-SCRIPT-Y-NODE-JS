const express = require('express');
const path = require('path');
const app = express();
const PORT = 3001;

// Ruta para el formulario de entrada
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Ruta que muestra el resultado
app.get('/mostrar', (req, res) => {
    // Aquí podrías procesar los datos, pero en este ejercicio solo servimos la página de resultado
    res.sendFile(path.join(__dirname, 'resultado.html'));
});

app.listen(PORT, () => {
    console.log(`Servidor educativo corriendo en http://localhost:${PORT}`);
});