const mongoose = require('mongoose')
const url = "mongodb+srv://zorn01:NXtVbSiW67OfOdKQ@icesiadvancedweb.cfp8a.mongodb.net/tallerNode?retryWrites=true&w=majority"
//const url = "mongodb://localhost:27017/tallerNodejs"

mongoose.connect(url)
const db = mongoose.connection
db.on("error", console.error.bind(console, "Mongo connection error"))

module.exports = db
