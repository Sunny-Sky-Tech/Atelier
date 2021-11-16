const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;

const QuestionSchema = new mongoose.Schema({
  user: {
    type: String,
    index: true,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true
  },
  body:  {
    type: String,
    required: true
  },
  reported: false,
  helpfullness: Number,
  timestamp: {Date, default: Data.now},
  answers: [{type: Schema.Types.ObjectId, ref: 'Answers'}]

},
);

const AnswerSchema = new mongoose.Schema({
  user: {
    type: String,
    index: true,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true
  },
  body:  {
    type: String,
    required: true
  },
  imageURL: String,
  reported: false,
  helpfullness: Number,
  timestamp: {Date, default: Data.now},

  _question : { type: Schema.Types.ObjectId, ref: 'Question'}
},
);

