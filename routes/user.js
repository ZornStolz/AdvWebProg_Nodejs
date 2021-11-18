const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')

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

module.exports = router;
