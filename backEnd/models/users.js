const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserSchema = new Schema({
    username: String,
    email: String,
    pw: String
});

module.exports = mongoose.model('user', UserSchema, 'users');
