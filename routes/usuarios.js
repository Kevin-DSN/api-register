const express = require('express');
const router = express.Router();
const pool = require('../db');

// Registro de usuario
router.post('/register', async (req, res) => {
    const { nombre, correo, contraseña } = req.body;

    try {
        await pool.query(
            'INSERT INTO usuarios (nombre, correo, contraseña) VALUES ($1, $2, $3)',
            [nombre, correo, contraseña]
        );
        res.status(201).send('Usuario registrado correctamente');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al registrar usuario');
    }
});

// Inicio de sesión
router.post('/login', async (req, res) => {
    const { correo, contraseña } = req.body;

    try {
        const result = await pool.query('SELECT * FROM usuarios WHERE correo = $1', [correo]);

        if (result.rows.length === 0) {
            return res.status(404).send('Usuario no encontrado');
        }

        if (result.rows[0].contraseña !== contraseña) {
            return res.status(401).send('Contraseña incorrecta');
        }

        res.send('Inicio de sesión exitoso');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al iniciar sesión');
    }
});

module.exports = router;