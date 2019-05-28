const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var UserSchema = new Schema({
    userName: {
        type: String,
        require: true
    },
    accountNumber: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    avatar: {
        type: String,
        default: 'http://ps39bryu4.bkt.clouddn.com/default.png'
    },
    userDesc: {
        type: String,
        default: '这个人很懒，什么都没留下'
    },
    likeNum: {
        type: Number,
        default: 0
    },
    careNum: {
        type: Number,
        default: 0
    },
    fansNum: {
        type: Number,
        default: 0
    },
    date: {
        type: String,
        default: Date.now()
    }
})

module.exports = mongoose.model('UserSchema', UserSchema);