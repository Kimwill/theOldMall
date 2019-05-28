const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var OrderSchema = new Schema({
  goodId: {
    type: String
  },
  good: {
    type: Object
  },
  userId: {
    type: String
  },
  bossId: {
    type: String
  },
  place: {
    type: String
  },
  consignee: {
    type: String
  },
  phone: {
    type: String
  },
  status: {
    type: Number,
    default: 0
  },
  date: {
    type: String,
    default: Date.now()
  }
})

module.exports = mongoose.model('OrderSchema', OrderSchema);