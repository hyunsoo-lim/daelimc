var mysql = require('mysql');
const db = mysql.createPool({
    host : 'daelimc.iptime.org',
    user : 'daelimc',
    password : 'Austn_9823',
    database : 'daelimc'
});

module.exports = db;