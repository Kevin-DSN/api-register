const { Pool } = require('pg');

const isProduction = !!process.env.DATABASE_URL;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL || "postgresql://USUARIO:CONTRASEÑA@HOST/NOMBRE_DB",
  ssl: isProduction ? { rejectUnauthorized: false } : false
});

pool.connect()
  .then(client => {
    console.log("Conectado a PostgreSQL");
    client.release();
  })
  .catch(err => {
    console.error("Error al conectar a PostgreSQL:", err.message);
  });

module.exports = pool;