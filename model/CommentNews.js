const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var CommentNewsSchema = new Schema({
  merchantId: {
    type: String
  },
  netFriendId: {
    type: String
  },
  infoId: {
    type: String
  },
  type: {
    type: String
  },
  date: {
    type: String,
    default: Date.now()
  }
})

module.exports = mongoose.model('CommentNewsSchema', CommentNewsSchema);