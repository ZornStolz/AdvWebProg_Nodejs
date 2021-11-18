const mongoose = require('mongoose')

const url = "mongodb://localhost:27017/tallerNodejs"

mongoose.connect(url)
const db = mongoose.connection
db.on("error", console.error.bind(console, "Mongo connection error"))

module.exports = db
