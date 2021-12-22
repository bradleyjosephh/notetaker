var app = require('express').Router()
var path = require('path')

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, '../public/index.html'))
})

// return to notes
app.get('/notes', function(req, res){
    res.sendFile(path.join(__dirname, '../public/notes.html'))
})

// return to index
app.get('*', function(req, res){
    res.sendFile(path.join(__dirname, '../public/index.html'))
})

module.exports = app