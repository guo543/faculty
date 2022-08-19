import mysql from 'mysql'

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'faculty'
});
connection.connect();

export default connection;