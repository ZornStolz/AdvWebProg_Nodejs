const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const notaController = require('../controllers/notaController')

/* CRUD user*/

/* GET: get all users*/
router.get('/', userController.findAll)

/* GET: get an user by id */
router.get('/:id', userController.findbyId);

/* POST: add a new user*/
router.post('/add', userController.create)

/* PUT: update an user by id*/
router.put('/update/:id', userController.update)

/* DELETE: deletes an user by id*/
router.delete('/delete/:id', userController.delete)

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
