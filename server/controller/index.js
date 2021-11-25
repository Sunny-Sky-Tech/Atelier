const db = require('../.././db').connection
const model = require('../model/index.js')

module.exports = {
  getQuestions: function (req, res) {
    params = [Number(req.params.count)]
    console.log(req.params)
    model.getQuestions(params, function (err, results, fields) {
      if (err) {
        console.log(err)
        res.sendStatus(500);
      } else {
        res.send(results)
      }
    })
  },

  postAnswers: function (req, res) {
    console.log(req)
    res.status(200).send('This answer post request is working')
  },

  postQuestion: function (req, res) {
    console.log(req.body)
    // res.status(200).send('This question post request is working')
    params = [ req.body['body'], req.body['name'], req.body['email'], req.body['product_id']]
    model.postQuestion(params, function(err, results, fields) {
      if (err) {
        console.log(err)
        res.status(500)
      } else
      console.log("Post request succeeded", params)
      res.status(201).send("Post request succeeded")
    })
  }
}
