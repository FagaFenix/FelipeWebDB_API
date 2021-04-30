const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema({
    Name: { type: String, require: true },
    Description: { type: String, require: true },
    idCategory: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' }, //Un producto solo puede tener una catergoria (con este esquema)

    //idCategory: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Category' }] //Con un array un producto puede tener varias catergorias.
})

module.exports = mongoose.model('Category', categorySchema)