const mysql = require('mysql');


const conecction = mysql.createPool({
    host: 'us-cdbr-east-03.cleardb.com',
    user: 'b443f318a9f91e',
    database: 'heroku_4bd69bbb2cbb271',
    password: '46259865'
});


module.exports = conecction;