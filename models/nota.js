const mongoose = require ('mongoose')

const Schema = mongoose.Schema

let NotaSchema = Schema ({
    title : {type:String, require:true, max:50},
    comment : {type:String, require:true, max:1000},
    userid : {type:String, require:true, max:50},
})

module.exports = mongoose.model('Nota', NotaSchema)
