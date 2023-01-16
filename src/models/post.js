const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true,
        maxLength: 100
    },
    body: {
        type: String,
        required: true,
        maxLength: 500
    },
    date: {
        type: Date,
        default: Date.now
    } 
});

module.exports = mongoose.model('Post', postSchema);