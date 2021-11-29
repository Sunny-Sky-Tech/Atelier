// get the client
const mysql = require('mysql2');

// create the connection to database server
// const connection = mysql.createConnection({
//   host: '127.0.0.1',
//   user: 'root',
//   password: 'Danc3Danc3',
//   database: 'QA'
// });

// // create the connection to database local
const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'ag76',
  password: 'D@nc3D@nc3',
  database: 'QA'
});

module.exports.connection = connection

connection.connect(function(err) {
  if (err) {
    console.log('Nah dawg, this ain\'t it', err)
    return
  }
  console.log('Yo dawg, the database works')
})