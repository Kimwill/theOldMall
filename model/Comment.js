const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var CommentSchema = new Schema({
  userInfo: {
    type: Object
  },
  content: {
    type: String
  },
  commentType: {
    type: String
  },
  relatedId: {
    type: String
  },
  date: {
    type: String,
    default: Date.now()
  }
})

module.exports = mongoose.model('CommentSchema', CommentSchema);