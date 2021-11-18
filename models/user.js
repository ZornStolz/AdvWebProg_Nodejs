const mongoose = require ('mongoose')

const Schema = mongoose.Schema

let UserSchema = Schema ({
    id : {type:String, require:true},
    idtype : {type:String, require:true},
    password : {type:String, require:true},
    name : {type:String, require:true},
    surname : {type:String, require:true},
    photo : {type:String},
    active : {type:Boolean},
    token: {type:String}
})

module.exports = mongoose.model('User', UserSchema)
