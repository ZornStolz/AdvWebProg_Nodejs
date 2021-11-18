const express = require('express')
const router = express.Router()

let user1 = {"id":"456397546","idtype":"cc","password":"1234","name":"paco","surname":"beltran","photo":"","active":false,"notas":[{"titulo":"patata 101","comentario":"fldsmdfr","id":"462136"},{"titulo":"viajando ando","comentario":"ta chevere el viaje, doña marina hizo un corrientaso 1a","id":"69752"}]}

//get
router.get("/", function(req, res, next){
    res.send("data")
})

module.exports = router
