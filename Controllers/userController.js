const user = require('../models/User')
const userModel = require('../models/User') //vamos a usar el modelo de category

/**
 * Mètodo para crear una nueva categoría
 * @param {*} req => Todos los datos y la información que le va a recibir.
 * @param {*} res => Todo lo que nosotros le vamos a devolver al usuario.
 */

//Post
exports.create = (req, res) => {
    console.log('Que tiene el body', req.body)
    const user = userModel({
        Email: req.body.Email,
        Password: req.body.Password,
        Name: req.body.Name,
        Age: req.body.Age,
        Gender: req.body.Gender,
        Type: req.body.Type
    })
    category.save().then(
        data => {
            res.send(data)
        }
    ).catch(
        error => {
            return res.status(500).send({
                message: error.message
            })
        }
    )
}

//Get
exports.findAll = (req, res) => {
    const user = {
            Email: req.body.Email,
            Password: req.body.Password,
            Name: req.body.Name,
            Age: req.body.Age,
            Gender: req.body.Gender,
            Type: req.body.Type
        }
        //Los parámetros son "a quien quiero modificar" "El nuevo valor o por qué valor lo quiero cambiar" y "Indica que los datos que se van a devolver son los autualizados"
    userModel.findAll(req.params.id, user).then(
        data => {
            res.send(data)
        }
    ).catch(
        (error) => {
            return res.status(500).send({
                message: "Error al buscar"
            })
        }
    )
}

//Put
exports.update = (req, res) => {
    const category = {
            Email: req.body.Email,
            Password: req.body.Password,
            Name: req.body.Name,
            Age: req.body.Age,
            Gender: req.body.Gender,
            Type: req.body.Type
        }
        //Los parámetros son "a quien quiero modificar" "El nuevo valor o por qué valor lo quiero cambiar" y "Indica que los datos que se van a devolver son los autualizados"
    userModel.findByIdAndUpdate(req.params.id, user).then(
        data => {
            res.send(data)
        }
    ).catch(
        (error) => {
            return res.status(500).send({
                message: "Error al modificar"
            })
        }
    )
}

//Delete
exports.delete = (req, res) => {
    const user = {
            Email: req.body.Email,
            Password: req.body.Password,
            Name: req.body.Name,
            Age: req.body.Age,
            Gender: req.body.Gender,
            Type: req.body.Type
        }
        //Los parámetros son "a quien quiero modificar" "El nuevo valor o por qué valor lo quiero cambiar" y "Indica que los datos que se van a devolver son los autualizados"
    userModel.delete(req.params.id, user).then(
        data => {
            res.send(data)
        }
    ).catch(
        (error) => {
            return res.status(500).send({
                message: "Error al Eliminar"
            })
        }
    )
}