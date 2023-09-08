const Pool = require('pg').Pool;
require('dotenv').config();


const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "library",
    password: process.env.DATABASE_PASSWORD,
    port: 5432,
});

module.exports = pool;