const { Pool } = require('pg');

const isProduction = !!process.env.DATABASE_URL;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL || "postgresql://base_postgre_1b2i_user:th8mtMtuyzIqu7AiR86ojYSFtRBzNiu9@dpg-d2eocpbuibrs73884pa0-a.ohio-postgres.render.com/base_postgre_1b2i",
  ssl: isProduction
    ? { rejectUnauthorized: false }  // Render requiere SSL
    : false                           // Local sin SSL
});

// Probar la conexión
pool.connect()
  .then(client => {
    console.log("Conectado a PostgreSQL");
    client.release();
  })
  .catch(err => {
    console.error("Error al conectar a PostgreSQL:", err.message);
  });

module.exports = pool;