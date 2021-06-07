const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    Email: { type: String, require: true },
    Password: { type: String, require: true },
    Name: { type: String, require: true },
    Age: { type: Number, require: true },
    Gender: { type: String, require: true },
    Type: { type: String, require: true }
})

module.exports = mongoose.model('User', userSchema)