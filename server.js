const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;  // Usa mayúsculas consistentemente

// Ruta para el formulario de entrada
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Ruta que muestra el resultado
app.get('/mostrar', (req, res) => {
    // Envía el archivo resultado.html (descomentado)
    res.sendFile(path.join(__dirname, 'resultado.html'));
});

app.listen(PORT, () => {
    console.log(`Servidor educativo corriendo en http://localhost:${PORT}`);
});