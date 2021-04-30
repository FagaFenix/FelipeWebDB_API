const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: { type: String, require: true },
    description: { type: String, require: true },
    price: { type: Number, require: true },
    image: { type: String, require: true }
})

module.exports = mongoose.model('Category', productSchema)