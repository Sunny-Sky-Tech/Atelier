// For reference - Client Calls
// const getQuestions = (id, count) => axios.get(`/qa/questions/${id}&count=${count}`);

// const postQuestion = (form) => axios.post('/qa/questions', form);

// const addAnswer = (id, form) => axios.post(`/qa/${id}/answers`, form);

// const addHelpfulQuestion = (id, endpoint) => axios.put(`qa/${endpoint}/${id}/helpful`);

// const reportAnswer = (id) => axios.put(`/qa/answers/${id}/report`);

const db = require('../../db').connection


module.exports = {
  // get: function (err, res) {
  //   db.query(
  //     'SELECT * FROM `groceries`',
  //     function(err, results, fields) {
  //       if (err) {
  //         console.log(err);
  //         res.sendStatus(500);
  //       } else {
  //         console.log(results)
  //         res.send(results)
  //       }
  //     }
  //   )

  getQuestions: function (callback) {
    // var queryStr = 'SELECT * FROM `groceries`';
    // db.query(queryStr, function(err, results, fields) {
    //   // console.log(err)
    //   callback(null, results)
    // })
 },

postQuestion: function (params, callback) {

},

addAnswer: function (params, callback) {
}

addHelpfulQuestion: function() {

}

reportAnswer: function() {

}
};