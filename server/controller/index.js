const db = require('../.././db').connection
const model = require('../model/index.js')

module.exports = {
  get: function (req, res) {
    params = [Number(req.params.count)]
    console.log(req.params)
    model.get(params, function (err, results, fields) {
      if (err) {
        console.log(err)
        res.sendStatus(500);
      } else {
        res.send(results)
      }
    })
  }
}