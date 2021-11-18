const mongoose = require ('mongoose')

const Schema = mongoose.Schema
var NotaSchema = require('./nota')

let UserSchema = Schema ({
    id : {type:String, require:true, max:50},
    idtype : {type:String, require:true, max:50},
    password : {type:String, require:true, max:50},
    name : {type:String, require:true, max:50},
    surname : {type:String, require:true, max:50},
    photo : {type:String, require:true, max:1000},
    active : {type:String, require:true, max:10},
    notas : [NotaSchema.schema]
})

module.exports = mongoose.model('User', UserSchema)
