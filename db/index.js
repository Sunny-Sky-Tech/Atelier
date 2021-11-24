// get the client
const mysql = require('mysql2');

// create the connection to database
const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'Danc3Danc3',
  database: 'QA'
});

module.exports.connection = connection

connection.connect(function(err) {
  if (err) {
    console.log('Nah dawg, this ain\'t it', err)
    return
  }
  // console.log(module.exports.connection)
  console.log('Yo dawg, the database works')
})