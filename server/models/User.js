const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type : String,
        required : true,
        maxLength : 50
    },
    username: {
        type : String,
        required : true,
        maxLength : 50
    },
    email: {
        type : String,
        required : true,
    },
    password: {
        type : String,
        required : true,
    },
    posts : [{
        type : String,
        ref : "Post"
    }]
})

module.exports = mongoose.model("User", userSchema)