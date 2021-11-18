const express = require('express')
const app = express()
const port = 8080

//status
app.get('/status', (req, res) => {
  res.send('API Online')
})

app.listen(port, ()=> {console.log("Api is listening on port: " + port);})
