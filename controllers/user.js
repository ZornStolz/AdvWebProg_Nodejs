const User = require('../models/user')

exports.create = (req, res, next) => {
    //res.send(req.body)
    
    let user = new User({
        id : req.body.id,
        idtype : req.body.idtype,
        password : req.body.password,
        name : req.body.name,
        surname : req.body.surname,
        photo : req.body.photo,
        active : req.body.active,
        notas : []
    })

    user.save(err => {
        if (err)
            return next(err)
        res.send("User created succesfully")
    })
}
