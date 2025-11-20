// configuracion_db.js

/**
 * Configuración de la conexión a la base de datos MySQL.
 * Los datos sensibles se almacenan aquí y se importan en app.js.
 */
const dbConfig = {
    host: '127.0.0.1',
    user:'root',
    password:'123456',
    database: 'node_crud', // Base de datos definida en db/db.sql
    port: 3306
};

module.exports = dbConfig;