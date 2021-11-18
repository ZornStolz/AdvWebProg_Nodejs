const express = require('express');
const router = express.Router();

//dummy user form db
let user1 = {
  "id":"15563469",
  "idtype":"cc",
  "password":"12345",
  "name":"luis",
  "surname":"garcia",
  "photo":"",
  "active":false,
  "notas":[]
};

//dummy user form db
let user2 = {
  "id":"456397546",
  "idtype":"cc",
  "password":"1234",
  "name":"paco",
  "surname":"beltran",
  "photo":"",
  "active":false,
  "notas":[
    {"titulo":"patata 101","comentario":"fldsmdfr","id":"462136"},
    {"titulo":"viajando ando","comentario":"ta chevere el viaje, doña marina hizo un corrientaso 1a","id":"69752"}
  ]
}

let users = [user1, user2]

/* GET: get all users*/
router.get('/', function(req, res, next) {

  let lista = "{["

  users.forEach(user => {
    lista += 
      "{" + 
        "id:" + user.id +","+ 
        "password:" + user.password +","+ 
        "name:"+ user.name +","+ 
        "surname:" + user.surname
     + "},"
  });
  lista += "]}"
  
  res.send(lista);
});

/* GET: get an user by id */
router.get('/:id', function(req, res, next) {
  var foundUser = user1
  if (foundUser != null){
    res.send(foundUser);
  }
});

/* POST: add a new user*/
router.post('/add', function(req, res, next) {
  res.send(req.body);
});

/* PUT: update an user by id*/
router.put('/update/:id', function(req, res, next) {
  //find id, replace on data base
  res.send(req.body);
});

/* DELETE: deletes an user by id*/
router.delete('/delete/:id', function(req, res, next) {
  //find id, delete on data base
  res.send("the user with the id " + req.params.id + " was deleted succesfully");
});


module.exports = router;
