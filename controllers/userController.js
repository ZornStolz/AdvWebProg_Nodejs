//controls all the access to the database

const User = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


/* creates a new user because a post method */
exports.create = async (req, res, next) => {
    
    const userExist = await User.findOne({id:req.body.id})
    if (userExist)
        return res.status("409").send("the user already exists")

    let encryPswd = await bcrypt.hash(req.body.password, 10)

    //creates an user with the information given by the body of the post
    let user = new User({
        id : req.body.id,
        idtype : req.body.idtype,
        password : encryPswd,
        name : req.body.name,
        surname : req.body.surname,
        photo : req.body.photo,
    })

    //saves on the db the new user
    user.save(err => {
        if (err)
            return next(err)
        res.send("User created succesfully")
    })
}

/* finds all the users because a get method */
exports.findAll = async (req, res, next) => {
    await User.find({}, (err, user) => {
        if (err)
            return next(err)
        res.send(user)
    })
}

/* finds a user by their id because a get method with id as a parameter*/
exports.findbyId = async (req, res, next) => {
    await User.findOne({id:req.params.id}, (err, user) => {
        if (err)
            return next(err)
        res.send(user)
    })
}

/* authenticates an user with an user and password */
exports.login = async (req, res, next) => {

    let {userId, userPswd} = req.body

    if (!userId || !userPswd){
        res.status(400).send("id or password not valid")
    }

    var user = await User.findOne({id: userID})
    if (user && await bcrypt.compare(userPswd, user.password)){
        const token = jwt.sign({id:user.id}, "llave:asdfghjkl", {expiresIn:"2h"})
        user.token = token;
        user.active = true;

        res.status("200").send( user.name + " " + user.surname + " has logged succesfully with token: " + token)
    } else {
        res.status("400").send("Invalid credentials")
    }
}

/* deletes an user by id because of a DELETE method */
exports.delete = async (req, res, next) => {
    await User.findOneAndDelete({id:req.params.id}, (err, user) => {
        if (err)
            return next(err)
        res.send( user.name + " " + user.surname + " identified with " + user.id +  " was succesfully eliminated")
    })
}

/* This method updates all available files, so the user can update only what he pleases,
it means, only what is given in the body will be updated and everything else will remain the same*/
exports.update = async (req, res, next) => {
    
    //I have to validate which fields i'm gonna update
    var oldUser = await User.findOne({id:req.params.id})
    
    var n_id = oldUser.id
    var n_idtype = oldUser.idtype
    var n_password = oldUser.password
    var n_name = oldUser.name
    var n_surname = oldUser.surname
    var n_photo = oldUser.photo
    var n_active = oldUser.active

    if (req.body.id != null)
        n_id = req.body.id

    if (req.body.idtype != null)
        n_idtype = req.body.idtype

    if (req.body.password != null)
        n_password = req.body.password

    if (req.body.name != null)
        n_name = req.body.name

    if (req.body.surname != null)
        n_surname = req.body.surname

    if (req.body.photo != null)
        n_photo = req.body.photo

    if (req.body.active != null)
        n_active = req.body.active

    //with all the available fields to change verified, we can proced to update one by one

     User.findOneAndUpdate({id:req.params.id}, {id: n_id}, (err, user) => {
         if (err)
         return next(err)
        })

     User.findOneAndUpdate({id:req.params.id}, {idtype: n_idtype}, (err, user) => {
         if (err)
         return next(err)
        })

     User.findOneAndUpdate({id:req.params.id}, {password: n_password}, (err, user) => {
         if (err)
         return next(err)
        })

     User.findOneAndUpdate({id:req.params.id}, {name: n_name}, (err, user) => {
         if (err)
         return next(err)
        })

     User.findOneAndUpdate({id:req.params.id}, {surname: n_surname}, (err, user) => {
         if (err)
         return next(err)
        })

    User.findOneAndUpdate({id:req.params.id}, {photo: n_photo}, (err, user) => {
            if (err)
            return next(err)
        })

    User.findOneAndUpdate({id:req.params.id}, {active: n_active}, (err, user) => {
            if (err)
            return next(err)
        })

    res.send("Update made succesfully")
}
