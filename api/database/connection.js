const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  port:  '3306',
  user: 'rafa',
  password: 'Cr6)sTYp:UfJ}4)',
  database: 'escudo'
});

module.exports = connection;
