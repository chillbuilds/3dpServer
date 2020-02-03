const fs = require("fs")
const path = require("path")
const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const port = process.env.port || 3000

app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'));
app.use(express.json())
app.use(bodyParser.json({limit: '800kb'}))

app.get('/app.js', function (req, res){
    res.sendFile(path.join(__dirname, '/public/app.js'))
})
app.get('/app.js', function (req, res){
    res.sendFile(path.join(__dirname, '/public/app.js'))
})
app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, "public/index.html"))
})

app.listen(port, function() {
    console.log(`http://localhost:${port}`)
})