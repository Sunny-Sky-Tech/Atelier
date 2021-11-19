const express = require('express')
const app = express()
const port = 8080
const db = require('./db');
const cors = require('cors')


module.exports.app = app;



//defined middleware
// var myLogger = function (req, res, next) {
  // console.log('Request URL ', req.url)
  // console.log('Request Method ', req.method)
  // console.log('Request Body ', req.body)
  // console.log('Request Params ', req.params)
//   console.log('MIDDLEWARE LOGGED')
//   next()
// }



// root api
app.get('/', (req, res) => {
  res.status(200).send('Hello World');
})

// get routes
app.get('/qa/questions/id=:id&count=:countNum', (req, res) => {
  res.status(200).send('This is a get request for the questions')
})

// post routes

// put routes


app.listen(port, () => {
  console.log(`This app is listening at http://localhost:${port}`)
})

