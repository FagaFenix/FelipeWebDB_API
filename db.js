const mongoose = require('mongoose') //Librería mongoose

const connectToDB = () => {
    mongoose.connect(' mongodb://127.0.0.1:27017/FelipeWebDB', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, (error) => {
        if (error) {
            console.log('tenemos un error', error)
        } else {
            console.log('Nos conectamos a la DB')
        }
    })
}
module.exports = { connectToDB }