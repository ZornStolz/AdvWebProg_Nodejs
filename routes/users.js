const express = require('express')
const router = express.Router()
const controller = require('../controllers/controller')

/* GET: get all users*/
router.get('/', controller.findAll)

/* GET: get an user by id */
router.get('/:id', controller.findbyId);

/* POST: add a new user*/
router.post('/add', controller.create)

/* PUT: update an user by id*/
router.put('/update/:id', controller.update)

/* DELETE: deletes an user by id*/
router.delete('/delete/:id', function(req, res, next) {
  //find id, delete on data base
  res.send("the user with the id " + req.params.id + " was deleted succesfully");
});


module.exports = router;
