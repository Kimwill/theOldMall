const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var BlogSchema = new Schema({
  blogHeader: {
    type: String,
  },
  blogDesc: {
    type: String
  },
  blogImg: {
    type: Array
  },
  userId: {
    type: String
  },
  userInfo: {
    type: Object
  },
  likeNum: {
    type: Number,
    default: 0
  },
  commentNum: {
    type: Number,
    default: 0
  },
  date: {
    type: String,
    default: Date.now()
  }
})

module.exports = mongoose.model('BlogSchema', BlogSchema);