// ./models/userModel.js
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    passward: {
        type: String,
        required: true
    }
});


module.exports = mongoose.model("User", UserSchema);