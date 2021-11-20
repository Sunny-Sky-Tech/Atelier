// For reference - Client Calls
// const getQuestions = (id, count) => axios.get(`/qa/questions/${id}&count=${count}`);

// const postQuestion = (form) => axios.post('/qa/questions', form);

// const addAnswer = (id, form) => axios.post(`/qa/${id}/answers`, form);

// const addHelpfulQuestion = (id, endpoint) => axios.put(`qa/${endpoint}/${id}/helpful`);

// const reportAnswer = (id) => axios.put(`/qa/answers/${id}/report`);

const db = require('../../db').connection


module.exports = {

  get: function (params, callback) {
    var queryStr = `SELECT * FROM answers LIMIT 0, ?`
    db.query(queryStr, params, (err, results) => {
      // console.log(err)
      if (err) {
        callback(err)
      } else {
        callback(null, results)
      }
  })

  },

  postQuestion: function (params, callback) {

  },

  addAnswer: function (params, callback) {
  },

  addHelpfulQuestion: function (params, callback) {

  },

  reportAnswer: function (params, callback) {

  }
};