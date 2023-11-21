const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    name: {
        type : String,
        required : true,
        maxLength : 50
    },
    url : {
        type : String,
        required : true
    }
})

module.exports = mongoose.model("Post", postSchema)