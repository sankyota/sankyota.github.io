require('dotenv').config();  // Cargar variables de entorno
const mysql = require('mysql');

const db = mysql.createConnection({
    host: process.env.DB_HOST || '127.0.0.1',  
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'evaluacionesdb',
    database: process.env.DB_NAME || 'gestionactivosti',
    port: process.env.DB_PORT || 3306
});

db.connect((err) => {
    if (err) {
        console.error('❌ Error al conectar a la base de datos:', err);
        process.exit(1);
    }
    console.log('✅ Conectado a la base de datos');
});

module.exports = db;
