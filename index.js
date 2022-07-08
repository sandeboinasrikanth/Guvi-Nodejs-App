const express = require('express')  //importing  => 'express' is 3rd party package
const app = express()


const PORT = 4000
app.get('/', function (request, response) {
  response.send('Hello 🌍👍')
})

app.listen(PORT )