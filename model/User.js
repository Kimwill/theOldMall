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
        type: String
    },
    date: {
        type: String,
        default: Date.now()
    }
})

module.exports = mongoose.model('UserSchema', UserSchema);