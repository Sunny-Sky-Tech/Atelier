const express = require('express')
const app = express()
const port = 8080
const db = require('./db');
const cors = require('cors')
const controller = require('./server/controller/index.js')
const bodyParser = require("body-parser");

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization, 'Content-Type' : 'multipart/form-data' ,* "
  );
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

app.use(bodyParser.json());
app.use(cors())


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

app.get('/loaderio-d2c23ced033654f3a129eee2f523891a', (req, res) => {
  res.status(200).send('loaderio-d2c23ced033654f3a129eee2f523891a');
})

// get routes
app.get('/qa/questions/:id&count=:count', controller.getQuestions)

// post routes
app.post('/qa/:question_id/answers', controller.postAnswers)

app.post('/qa/questions', controller.postQuestion)


app.listen(port, () => {
  console.log(`This app is listening at http://localhost:${port}`)
})

