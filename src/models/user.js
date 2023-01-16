const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 5,
        maxLength: 35
    },
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        minLenght: 10,
        maxLength: 30
    },
    password: {
        type: String,
        required: true,
        minLenght: 8,
        maxLength: 20
    },
    address: {
        street: {
            type: String,
            maxLength: 50,
            default: ""
        },
        location: {
            type: String,
            maxlength: 50,
            default: ""
        },
        city: {
            type: String,
            maxlength: 50,
            default: ""
        },
        country: {
            type: String,
            maxlength: 50,
            default: ""
        },
        cp: {
            type: String,
            maxlength: 4,
            default: ""
        }
    },
    birthdate: {
        type: Date,
        default: null
    },
    phone: {
        type: String,
        maxlength: 15,
        default: ""
    },
    date: {
        type: Date,
        default: Date.now
    } 
});

module.exports = mongoose.model('User', userSchema);