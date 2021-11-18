const Nota = require('../models/nota')
const User = require('../models/user')

exports.create = (req, res, next) => {
    //creates an user with the information given by the body of the post
    let nota = new Nota({

        id: req.body.id,
        title: req.body.title,
        comment: req.body.comment,
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
    Nota.find({ userid: req.params.userid }, (err, nota) => {
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

/* delete a nota by id if the user is authenticated  */
exports.delete = async (req, res, next) => {
    let userid = req.params.userid
    let user = await User.findOne({ id: userid })
    if (user != null) {
        if (user.active) {
            let currentnota = await Nota.findById(req.params.id)
            if (currentnota != null) {
                if (currentnota.userid == user.id) {
                    Nota.findByIdAndDelete(req.params.id, (err, nota) => {
                        if (err)
                            return next(err)
                        res.send(nota.title + " identified with " + nota.id + " was succesfully eliminated")
                    })
                }
                else {
                    res.send("The note does not belong to the user")
                }
            } else {
                res.send("Nota not found")
            }
        }
        else {
            res.send("Unauthenticated user")
        }
    }
    else {
        res.send("User not found")
    }
}
/* modify a nota by id if the user is authenticated*/
exports.update = async (req, res, next) => {
    let userid = req.params.userid
    let user = await User.findOne({ id: userid })
    console.log(userid)
    console.log(user)
    if (user != null) {
        if (user.active) {
            let currentnota = await Nota.findById(req.params.id)
            if (currentnota != null) {
                if (currentnota.userid == user.id) {
                    Nota.findByIdAndUpdate(req.params.id, req.body, (err, nota) => {
                        if (err)
                            return next(err)
                        res.send(nota.title + " identified with " + nota.id + " was succesfully modified")
                    })
                }
                else {
                    res.send("The note does not belong to the user")
                }
            } else {
                res.send("Nota not found")
            }
        }
        else {
            res.send("Unauthenticated user")
        }
    }
    else {
        res.send("User not found")
    }
}