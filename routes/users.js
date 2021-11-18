const express = require('express');
const router = express.Router();

//dummy user form db
let user = {
  "id":"15563469",
  "idtype":"cc",
  "password":"12345",
  "name":"luis",
  "surname":"garcia",
  "photo":"",
  "active":false,
  "notas":[]
};

/* GET: get an user by id */
router.get('/:id', function(req, res, next) {
  if (req.params.id == user.id){
    res.send(user);
  }
});

/* POST: add a new user by id */
router.get('/:id', function(req, res, next) {
  if (req.params.id == user.id){
    res.send(user);
  }
});

/* GET an user by id */
router.get('/:id', function(req, res, next) {
  if (req.params.id == user.id){
    res.send(user);
  }
});

module.exports = router;
