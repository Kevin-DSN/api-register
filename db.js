const { Pool } = require('pg');

const pool = new Pool({
    connectionString: process.env.DATABASE_URL || "postgresql://base_postgre_1b2i_user:th8mtMtuyzIqu7AiR86ojYSFtRBzNiu9@dpg-d2eocpbuibrs73884pa0-a.ohio-postgres.render.com/base_postgre_1b2i",
    ssl: process.env.DATABASE_URL ? { rejectUnauthorized: false } : false
});

module.exports = pool;