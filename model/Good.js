const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var GoodSchema = new Schema({
  goodHeader: {
    type: String,
  },
  goodDesc: {
    type: String
  },
  goodImg: {
    type: Array
  },
  price: {
    type: String
  },
  classify: {
    type: Array
  },
  way: {
    type: Array
  },
  userId: {
    type: String
  },
  userInfo: {
    type: Object
  },
  comment: {
    type: Object
  },
  date: {
    type: String,
    default: Date.now()
  }
})

module.exports = mongoose.model('GoodSchema', GoodSchema);