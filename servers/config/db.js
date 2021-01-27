var mysql = require('mysql');
const db = mysql.createPool({
    host : 'localhost',
    user : 'root',
    password : 'fish4528',
    database : 'daelimc'
});

module.exports = db;