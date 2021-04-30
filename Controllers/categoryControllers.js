const categoryModel = require('../models/Category') //vamos a usar el modelo de category

/*
 * C = Create
 * R = Read
 * U = Update
 * D = Delete
 */


/**
 * Mètodo para crear una nueva categoría
 * @param {*} req => Todos los datos y la información que le va a recibir.
 * @param {*} res => Todo lo que nosotros le vamos a devolver al usuario.
 */


exports.create = (req, res) => {
    console.log('Que tiene el body', req.body)
    const category = categoryModel({
        Name: req.body.Name,
        Description: req.body.Description
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

/**
 * Mètodo para crear una nueva categoría
 * @param {*} req => Todos los datos y la información que le va a recibir.
 * @param {*} res => Todo lo que nosotros le vamos a devolver al usuario.
 */

exports.findAll = (req, res) => {
    const category = {
            Name: req.body.Name,
            Description: req.body.Description
        }
        //Los parámetros son "a quien quiero modificar" "El nuevo valor o por qué valor lo quiero cambiar" y "Indica que los datos que se van a devolver son los autualizados"
    categoryModel.find().then(
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

/**
 * Mètodo para crear una nueva categoría
 * @param {*} req => Todos los datos y la información que le va a recibir.
 * @param {*} res => Todo lo que nosotros le vamos a devolver al usuario.
 */

exports.update = (req, res) => {
    const category = {
            Name: req.body.Name,
            Description: req.body.Description
        }
        //Los parámetros son "a quien quiero modificar" "El nuevo valor o por qué valor lo quiero cambiar" y "Indica que los datos que se van a devolver son los autualizados"
    categoryModel.findByIdAndUpdate(req.params.id, category, { new: true }).then(
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

/**
 * Mètodo para crear una nueva categoría
 * @param {*} req => Todos los datos y la información que le va a recibir.
 * @param {*} res => Todo lo que nosotros le vamos a devolver al usuario.
 */

exports.deleteOne = (req, res) => {
    const category = {
            Name: req.body.Name,
            Description: req.body.Description
        }
        //Los parámetros son "a quien quiero modificar" "El nuevo valor o por qué valor lo quiero cambiar" y "Indica que los datos que se van a devolver son los autualizados"
    categoryModel.findByIdAndRemove(req.params.id).then(
        categoryDeleted => {
            res.send(categoryDeleted)
        }
    ).catch(
        (error) => {
            return res.status(500).send({
                message: "Error al Eliminar"
            })
        }
    )
}