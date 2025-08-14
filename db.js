const { Pool } = require('pg');

// Configuración de la conexión
const pool = new Pool({
  connectionString: process.env.DATABASE_URL || "postgresql://base_postgre_1b2i_user:th8mtMtuyzIqu7AiR86ojYSFtRBzNiu9@dpg-d2eocpbuibrs73884pa0-a.ohio-postgres.render.com/base_postgre_1b2i",
  ssl: process.env.DATABASE_URL
    ? { rejectUnauthorized: false } // Render y otros servicios remotos
    : false // Desarrollo local sin SSL
});

// Probar la conexión al iniciar
pool.connect()
  .then(client => {
    console.log("Conectado a la base de datos PostgreSQL");
    client.release(); // Liberamos el cliente
  })
  .catch(err => {
    console.error("Error al conectar a PostgreSQL:", err.message);
  });

module.exports = pool;