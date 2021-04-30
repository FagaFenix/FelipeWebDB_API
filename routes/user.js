/**
 * 
 * @param {*} app => Es el objeto de Express que se creó en el archivo index.
 */

module.exports = (app) => {
    const userController = require('../Controllers/UserController')

    /**
     * Verbos del protocolo HTTP
     * POST: Se utiliza para almacenar información y trabajar con el login
     * GET: Obtener información por medio de la URL
     * PUT: Se utiliza para modificar la información. Se envía la info respecto a quién quiero modificar
     * DELETE: Se utiliza para eliminar la info y también se envía a quién queremos eliminar por la URL
     */
    app.post('/user/create', userController.create)
    app.get('/user/getAll', userController.findAll)
    app.put('/user/update/:id', userController.put)
    app.delete('/user/deleteOne/:id', userController.delete)
}