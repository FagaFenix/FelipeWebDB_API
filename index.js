const express = require('express') // para recordarme que estoy trabajando con express
const bodyParser = require('body-parser')

const { connectToDB } = require('./db')


const app = express() //Se convierte en un objeto para utilizar las herramientas que tiene

app.use(bodyParser.json())
connectToDB()

require('./routes/category')(app) //Se està cargando el archivo de rutas de las categorías y se envía una variables llamada app.

app.listen(3000, () => {
    console.log('Nos conectamos!')
})