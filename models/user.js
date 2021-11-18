const mongoose = require ('mongoose')

const Schema = mongoose.Schema

let NotaSchema = Schema ({
    id : {type:String, require:true, max:50},
    title : {type:String, require:true, max:50},
    comment : {type:String, require:true, max:1000}
})

let UserSchema = Schema ({
    id : {type:String, require:true, max:50},
    idtype : {type:String, require:true, max:50},
    password : {type:String, require:true, max:50},
    name : {type:String, require:true, max:50},
    surname : {type:String, require:true, max:50},
    photo : {type:String, require:true, max:1000},
    active : {type:String, require:true, max:10},
    notas : [NotaSchema]
})

module.exports = mongoose.model('User', UserSchema)
