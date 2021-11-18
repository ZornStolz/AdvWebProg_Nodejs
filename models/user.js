const mongoose = require ('mongoose')

const Schema = mongoose.Schema

let UserSchema = Schema ({
    id : {type:String, require:true},
    idtype : {type:String, require:true},
    password : {type:String, require:true},
    token: {type:String, require:true},
    name : {type:String, require:true},
    surname : {type:String, require:true},
    photo : {type:String, require:true},
    active : {type:String, require:true}
})

module.exports = mongoose.model('User', UserSchema)
