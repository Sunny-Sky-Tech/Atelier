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

// Origional Instance Loader.IO
app.get('/loaderio-4f12d79a4bf05208e4b9494d0bb58d32', (req, res) => {
  res.status(200).send('loaderio-4f12d79a4bf05208e4b9494d0bb58d32');
})

// Load Balancer Loader.IO
app.get('/loaderio-a2c462ad9b220e0977e5f317eb4bd2bd', (req, res) => {
  res.status(200).send('loaderio-a2c462ad9b220e0977e5f317eb4bd2bd');
})


// get routes
app.get('/qa/questions/:id&count=:count', controller.getQuestions)

// post routes
app.post('/qa/:question_id/answers', controller.postAnswers)

app.post('/qa/questions', controller.postQuestion)


app.listen(port, () => {
  console.log(`This app is listening at http://localhost:${port}`)
})

