const express = require('express');
const bodyParser = require('body-parser');
const usuariosRoutes = require('./routes/usuarios');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Rutas
app.use('/', usuariosRoutes);

// Servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en puerto ${port}`);
});