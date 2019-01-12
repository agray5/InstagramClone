const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const createUserSchema = new Schema({
    _id: {
        type: String,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    gender: {
        type: String,
        require: true
    },
    posts: {
        type: Array,
        require: false,
        default: []
    },
    date: {
        type: Date,
        default: Date.now
    },
    newUser: {
        type: Boolean,
        default: true
    }
})

module.exports = Users = mongoose.model('users', createUserSchema);