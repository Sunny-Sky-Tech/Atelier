// get the client
const mysql = require('mysql2');
const config= require('../config.js')

// create the connection to database server EC2 Instance
const connection = mysql.createConnection({
  host: config.host,
  user: config.user,
  password: config.password,
  database: config.database,
});


module.exports.connection = connection

connection.connect(function(err) {
  if (err) {
    console.log('Nah dawg, this ain\'t it', err)
    return
  }
  console.log('Yo dawg, the database works')
})