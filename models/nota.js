const mongoose = require ('mongoose')

const Schema = mongoose.Schema

let NotaSchema = Schema ({
    id : {type:String, require:true, max:50},
    title : {type:String, require:true, max:50},
    comment : {type:String, require:true, max:1000}
})

module.exports = mongoose.model('Nota', NotaSchema)
