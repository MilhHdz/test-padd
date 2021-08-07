const mysql = require('mysql');


const conecction = mysql.createPool({
    host: '144.126.222.6',
    user: 'neo',
    database: 'paddockdb',
    password: 'Milh30'
});


module.exports = conecction;