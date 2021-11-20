const express = require('express')
const app = express()
const port = 8080
const db = require('./db');
const cors = require('cors')
const controller = require('./server/controller/index.js')


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



// root directory
app.get('/', (req, res) => {
  res.status(200).send('Hello World');
})

// get routes
app.get('/qa/questions/:id&count=:count', controller.get)

// post routes
app.post('/qa/:question_id/answers', (req, res) => {
  console.log(req.params)
  res.status(200).send('This is a post request for the answers')
})

app.post('/qa/questions', (req, res) => {
  console.log(req.params)
  res.status(200).send('This is a post request for the questions')
})


// put routes
app.put('/qa/:endpoint/:id/helpfulness', (req, res) => {
  console.log(req.params)
  res.status(200).send('This is a put request for the answers/questions helpfulness')
})

app.put('/qa/answers/report', (req, res) => {
  console.log(req.params)
  res.status(200).send('This is a put request for the answers report')
})


app.listen(port, () => {
  console.log(`This app is listening at http://localhost:${port}`)
})

