const mongoose = require('mongoose');

const registerSchema = new mongoose.Schema({

    Name: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    PhNumber: {
        type: Number,
        required: true
    },
    Password: {
        type: String,
        required: true
    },
    CPassword: {
        type: String,
        required: true
    }

})
const register = mongoose.model('register',registerSchema);
module.exports = register;