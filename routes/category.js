module.exports = (app) => {
    const categoryController = require('../Controllers/categoryControllers')

    /**
     * Verbos protocolo HTTP
     * POST   : Se utiliza para almacenar información y trabajar con el login.
     * GET    : Obtener información por medio de la URL
     * PUT    : Se utiliza para modificar la información. Se envía las información respecto a quién quiero modificar por la URL.
     * DELETE : Se utiliza para eliminar la información, también se envía a quién queremos eliminar, por la URL
     */

    app.post('/category/create', categoryController.create)
    app.get('/category/getAll', categoryController.findAll)
    app.put('/category/update/:id', categoryController.update)
    app.delete('/category/deleteOne/:id', categoryController.deleteOne)

}