const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;

const QuestionSchema = new mongoose.Schema({
  asker: {
    type: String,
    index: true,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true
  },
  body: String,
  reported: false,
  helpfullness: Number,
  timestamp: true,
  answers: [type: Schema.Types.ObjectId, ref: 'Answers']

}
);
