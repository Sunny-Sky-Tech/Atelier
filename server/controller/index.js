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
    console.log(req.params)
    res.status(200).send('This question post request is working')
  }
}