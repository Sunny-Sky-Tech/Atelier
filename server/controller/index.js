const db = require('../.././db').connection
const model = require('../model/index.js')

module.exports = {
  getQuestions: function (req, res) {
    params = [Number(req.params.count)]
    model.getQuestions(params, function (err, results, fields) {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(results)
      }
    })
  },

  postAnswers: function (req, res) {
    res.status(200).send('This answer post request is working')
  },

  postQuestion: function (req, res) {
    // res.status(200).send('This question post request is working')
    params = [ req.body['body'], req.body['name'], req.body['email'], req.body['product_id']]
    model.postQuestion(params, function(err, results, fields) {
      if (err) {
        res.status(500).send(err)
      } else
      res.status(201).send("Post request succeeded")
    })
  }
}
