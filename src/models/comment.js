const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
    postId: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true,
        maxLength: 50,
    },
    email: {
        type: String,
        required: true,
        maxLength: 50
    },
    comment: {
        type: String,
        required: true,
        maxLength: 250
    },
    date: {
        type: Date,
        default: Date.now
    } 
}); 

module.exports = mongoose.model('Comment', commentSchema);