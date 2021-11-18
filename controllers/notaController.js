const Nota = require('../models/nota')
const User = require('../models/user')

exports.create = (req, res, next) => {
    //creates an user with the information given by the body of the post
    let nota = new Nota({
        
        id : req.body.id,
        title : req.body.title,
        comment : req.body.comment,
        userid: req.params.userid

    })

    //saves on the db the new nota
    nota.save(err => {
        if (err)
            return next(err)
        res.send("Nota created succesfully")
    })
}

/* finds all the notes from user */
exports.findAll = (req, res, next) => {
    Nota.find({userid:req.params.userid}, (err, nota) => {
        if (err)
            return next(err)
        res.send(nota)
    })
}

/* finds a nota */
exports.findbyId = (req, res, next) => {
    Nota.findById(req.params.id, (err, nota) => {
        if (err)
            return next(err)
        res.send(nota)
    })
}

exports.delete = (req, res, next) => {
    let user =User.findOne({id:req.params.id})
    if(user.active){
    Nota.findByIdAndDelete(req.params.id, (err, nota) => {
        if (err)
            return next(err)
        res.send( nota.title + " identified with " + nota.id +  " was succesfully eliminated")
    })}
    else{
        res.send("Usuario no autenticado")
    }
}

exports.update = (req, res, next)=>{
    let user =User.findOne({id:req.params.id})
    if(user.active){
    Nota.findByIdAndUpdate(req.params.id, req.body, (err, nota)=>{
        if (err)
            return next(err)
        res.send( nota.title + " identified with " + nota.id +  " was succesfully modified")
    })}
    else{
        res.send("Usuario no autenticado")
    }
}