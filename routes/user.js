const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const notaController = require('../controllers/notaController')

/* CRUD user*/

/* GET: get all users*/
router.get('/', userController.findAll)

/* GET: get an user by id */
router.get('/:id', userController.findbyId);

/* POST: add a new user uses the body*/
router.post('/', userController.create)

/* PUT: update an user by id*/
router.put('/:id', userController.update)

/* DELETE: deletes an user by id*/
router.delete('/:id', userController.delete)

/* POST: log an user in and gets authenticated uses the body for it*/
router.post('/login', userController.login)

/* CRUD nota*/

/*GET: get all notas*/
router.get('/:userid/notas/', notaController.findAll)

/*GET: get a nota by id*/
router.get('/:userid/notas/:id', notaController.findbyId)

/*POst: add a new nota*/
router.post('/:userid/notas', notaController.create)

/*DELETE: delete a nota by id*/
router.delete('/:userid/notas/:id', notaController.delete)

/*PUT: update a nota by id*/
router.put('/:userid/notas/:id', notaController.update)




module.exports = router;
